var express = require("express");
var router = express.Router();
const axios = require("axios");



/* GET users listing. */
router.get('/nft_metadata', async (req, res) => {
  let tokenId = req.query.tokenId;
  const response = await axios.get(
    `https://raw.githubusercontent.com/hyunkicho/Sogang-nft/main/contracts/metadata_character/${tokenId}`
  );
  const data = response.data;
  console.log("data back is ", data)
  res.json(data)
})

module.exports = router;
