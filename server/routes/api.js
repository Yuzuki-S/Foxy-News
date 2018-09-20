var router = require('express').Router();

var {
  getUserMeetingHistory,
  getMeetingInfo,
  saveMeeting
} = require('../db/meetings');

let { getUsers } = require('../db/users');

router.get('/meetings/:id', getMeetings);

function getMeetings(req, res, next) {
  getUserMeetingHistory(req.params.id).then(data => {
    let arr = data.map(meeting => {
      return getMeetingInfo(meeting.meeting_id);
    });
    Promise.all(arr).then(info => {
      res.json(info);
    });
  });
}

router.post('/meetings', saveMeetingAPI);

function saveMeetingAPI(req, res, next) {
  //console.log(req.body);
  saveMeeting(req.body).then(data => {
    //console.log(data);
    res.json(data);
  });
}

router.get('/meetings/:id/users', getMeetingAttendees);

function getMeetingAttendees(req, res, next) {
  getMeetingInfo(req.params.id).then(info => {
    res.json(info);
  });
}

router.get('/users', getUsersAPI);

function getUsersAPI(req, res, next) {
  getUsers().then(users => {
    console.log(users);
    res.json(users);
  });
}

module.exports = router;
