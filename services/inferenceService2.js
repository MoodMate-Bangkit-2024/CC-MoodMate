const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

// Load the word index
const wordIndexPath = path.join(__dirname, "../word_index_chatbot.json");
const wordIndex = JSON.parse(fs.readFileSync(wordIndexPath, "utf8"));

// Preprocessing functions
function lowercase(review) {
  return review.toLowerCase();
}

function removePunctuation(review) {
  return review.replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, "");
}

function preprocessText(review) {
  review = lowercase(review);
  review = removePunctuation(review);
  return review;
}

// Tokenizer functions
function textsToSequences(texts) {
  return texts.map((text) =>
    text.split(" ").map((word) => wordIndex[word] || wordIndex["<OOV>"])
  );
}

function padSequences(sequences, maxLength) {
  return sequences.map((seq) => {
    if (seq.length > maxLength) {
      return seq.slice(0, maxLength);
    } else {
      const padded = new Array(maxLength).fill(0);
      for (let i = 0; i < seq.length; i++) {
        padded[i] = seq[i];
      }
      return padded;
    }
  });
}

async function predictMood(model, prompt) {
  try {
    const preprocessedText = preprocessText(prompt);
    const sequences = textsToSequences([preprocessedText]);
    const paddedSequences = padSequences(sequences, 10);
    const inputTensor = tf.tensor2d(paddedSequences);

    const moodmateResponse = model.predict(inputTensor);

    return { moodmateResponse };
  } catch (err) {
    throw `Terjadi kesalahan dalam melakukan prediksi - ${err}`;
  }
}

module.exports = predictMood;
