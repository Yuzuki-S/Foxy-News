const router = require('express').Router();
const request = require('superagent');

router.get('/', (req, res) => {
  console.log('hit the route');
  request
    .get('https://randomfox.ca/floof/')
    .then(ApiRes => {
      console.log('routes', ApiRes);
      res.json(ApiRes.body.image);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
