const db = require('./connection');
let usersDB = require('./users');

function getUserMeetingHistory(user_id) {
  return db('attendees')
    .where('user_id', user_id)
    .then(userMeetings => {
      //console.log(userMeetings);
      return (userMeetingHistory = userMeetings.map(userMeeting => {
        getMeetingInfo(userMeeting.meeting_id);
        //getAttendeeByMeeting();
        //find meeting info by ID, return object with meeting info + list of all attendees for that meeting
        // getAttendeesByMeeting(meeting);
      }));
    });
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
      let arr = [];
      return getAttendeesByMeeting(meeting_id).then(attendees => {
        meetingData.attendees = attendees;
        arr.push(meetingData);
        return Promise.all(arr);
      });
    });
}

getUserMeetingHistory(1);

module.exports = {
  getUserMeetingHistory
};
