var router = require('express').Router();

var { userExists, createUser } = require('../db/users');
var { getUserMeetingHistory, getMeetingInfo } = require('../db/meetings');

var token = require('../auth/token');

router.post('/register', register, token.issue);

router.get('/getstuff/:id', getStuff, token.issue);

function getStuff(req, res, next) {
  getUserMeetingHistory(req.params.id).then(data => {
    let arr = data.map(meeting => {
      return getMeetingInfo(meeting.meeting_id);
    });
    Promise.all(arr).then(info => {
      res.json(info);
    });
  });
}

function register(req, res, next) {
  const { user_name, first_name, last_name, password } = req.body;
  userExists(user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({ message: 'User Name Taken' });
      createUser(user_name, first_name, last_name, password, req.app.get('db'))
        .then(() => next())
        .catch(err => res.status(500).send({ message: 'Server Error' }));
    })
    .catch(err => res.status(500).send({ message: 'Server Error' }));
}

router.post('/login', token.issue);

module.exports = router;
