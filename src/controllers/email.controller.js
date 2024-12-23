require("dotenv").config();
const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

exports.getHistory = async function (req, res, next) {
  const publicKey = process.env.PUBLIC_KEY; // Load from .env
  const privateKey = process.env.PRIVATE_KEY; // Load from .env
  try {
    const response = await axios.get(
      `https://api.emailjs.com/api/v1.1/history?user_id=${publicKey}&accessToken=${privateKey}&page=1&count=50`,
      { httpsAgent: agent } // Attach custom HTTPS agent here
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
