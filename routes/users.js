const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send({
    data: [],
    success: true,
  });
});

module.exports = router;
