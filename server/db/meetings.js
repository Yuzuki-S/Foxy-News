const db = require('./connection');
let usersDB = require('./users');

function getUserMeetingHistory(user_id) {
  return db('attendees').where('user_id', user_id);
}

function getAttendeesByMeeting(meeting_id) {
  return db('attendees')
    .where('meeting_id', meeting_id)
    .then(entries => {
      let arr = [];
      entries.forEach(entry => {
        arr.push(usersDB.getUserByID(entry.user_id));
      });
      return Promise.all(arr);
    });
}

function getMeetingInfo(meeting_id) {
  return db('meetings')
    .where('id', meeting_id)
    .first()
    .then(meetingData => {
      return getAttendeesByMeeting(meeting_id).then(attendees => {
        meetingData.attendees = attendees;
        return meetingData;
      });
    });
}

module.exports = {
  getUserMeetingHistory,
  getMeetingInfo
};
