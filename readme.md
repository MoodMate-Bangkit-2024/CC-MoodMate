### Build With:

The backend is built upon Node.js with several of its packages including:

- @tensorflow/tfjs-node: A TensorFlow library for Node.js that allows you to run TensorFlow models in a Node.js environment.
- express: A fundamental Node.js web application framework for building robust and efficient web applications.
- jsonwebtoken: Token based user authentication.
- bcrypt: A library to help you hash passwords, providing a way to store passwords securely.
- cookie-parser: A middleware for parsing cookies attached to client requests.
- mongoose: A versatile ODM (Object Data Modeling) library for MongoDB, making database interactions more intuitive.
- sastrawijs: A library for processing Indonesian language, useful for tasks like stemming, tokenizing, and language analysis.
- validator: A library for string validation and sanitization.
- dotenv: A module that loads environment variables from a .env file into process.env, helping you manage configuration variables.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## System Architecture Design

![System Architecture](https://storage.googleapis.com/c241-ps017-moodmate_bucket/documentation/Screenshot%202024-06-19%20220937.png)

The diagram above illustrates the path data follows, originating from users, passing through the API endpoint, navigating through the cloud architecture, and finally returning to the user.

- When a user initially submits their prompt/journal, it triggers a POST request. This request is intercepted and processed by Express. Express subsequently extracts the incoming prompt data from the request body and forwards it as parameters to invoke model load using TFJS.

- TFJS, in return generates a response in a form of predicted user mood or a chatbot response.

- Upon receiving the model's response, Express then stores it in our cloud-based Mongo Atlas Database. Finally, the predicted mood/chatbot response is rendered and displayed to the user, completing the user's interaction with the application.
