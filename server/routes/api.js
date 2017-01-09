const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({code:200, message:'OK'});
});

module.exports = router;
