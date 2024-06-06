const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

// Load the word index
const wordIndexPath = path.join(__dirname, "../word_index.json");
const wordIndex = JSON.parse(fs.readFileSync(wordIndexPath, "utf8"));

// Preprocessing functions
function lowercase(review) {
  return review.toLowerCase();
}

function removeURL(review) {
  return review.replace(/http\S+/g, "");
}

function removeMentions(review) {
  return review.replace(/@\w+/g, "");
}

function removeSquareBrackets(review) {
  return review.replace(/\[.*?\]/g, "");
}

function removeIrrelevant(review) {
  return review.replace(/[^a-zA-Z\s]/g, " ");
}

function removeSpace(review) {
  return review.replace(/\s+/g, " ").trim();
}

function removeEmoji(review) {
  return review.replace(
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2702}-\u{27B0}\u{24C2}-\u{1F251}]+/gu,
    ""
  );
}

function repeatChar(review) {
  return review.replace(/([A-Za-z])\1{2,}/g, "$1");
}

function removeStopwords(sentence, stopwords) {
  const words = sentence.split(" ");
  const noWords = words.filter((word) => !stopwords.includes(word));
  return noWords.join(" ");
}

// Load stopwords and alay dictionary
/* const stopwordsPath = path.join(__dirname, "stopwords.json");
const stopwords = JSON.parse(fs.readFileSync(stopwordsPath, "utf8"));

const alayDictPath = path.join(__dirname, "alay_dict.json");
const alayDict = JSON.parse(fs.readFileSync(alayDictPath, "utf8")); */

function preprocessText(review) {
  review = lowercase(review);
  review = removeURL(review);
  review = removeMentions(review);
  review = removeSquareBrackets(review);
  review = removeIrrelevant(review);
  review = removeSpace(review);
  review = removeEmoji(review);
  review = repeatChar(review);
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

async function predictMood(model, text) {
  try {
    const preprocessedText = preprocessText(text);
    const sequences = textsToSequences([preprocessedText]);
    const paddedSequences = padSequences(sequences, 250); // max_length = 300
    const inputTensor = tf.tensor2d(paddedSequences);

    const prediction = model.predict(inputTensor);
    const probabilities = prediction.arraySync()[0];

    let mood;

    const labels = ["anger", "fear", "happy", "sadness"];
    let maxIndex = 0;
    let maxProb = probabilities[0];

    for (let i = 1; i < probabilities.length; i++) {
      if (probabilities[i] > maxProb) {
        maxProb = probabilities[i];
        maxIndex = i;
      }
    }

    /* const moodPredictions = {
      anger: probabilities[0].toFixed(2),
      fear: probabilities[1].toFixed(2),
      happy: probabilities[2].toFixed(2),
      sadness: probabilities[3].toFixed(2),
    }; */

    mood = labels[maxIndex];
    const confidenceScore = probabilities[maxIndex].toFixed(2);

    return { mood, confidenceScore };
  } catch (err) {
    throw `Terjadi kesalahan dalam melakukan prediksi - ${err}`;
  }
}

module.exports = predictMood;
