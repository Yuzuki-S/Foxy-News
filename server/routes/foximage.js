const router = require('express').Router();
const request = require('superagent');

router.get('/', (req, res) => {
  request
    .get('https://randomfox.ca/floof/')
    .then(ApiRes => {
      res.json(ApiRes.body.image);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
