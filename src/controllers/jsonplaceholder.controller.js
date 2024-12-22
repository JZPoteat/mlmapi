const axios = require("axios");
const https = require("https");

const agent = new https.Agent({ rejectUnauthorized: false });

exports.getPosts = async function (req, res, next) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      { httpsAgent: agent }
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
