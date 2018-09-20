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

// create meeting entry
// create attendee entry for every attendee
// create user for every attendee, where attendee.userName is not in user db

function saveMeeting(meeting) {
  return db('meetings')
    .insert({
      meeting_name: meeting.meetingName,
      time: meeting.time,
      duration_seconds: meeting.totalMeetingTimeSeconds,
      attendees: meeting.attendees.length,
      cost: meeting.totalCostOfMeeting
    })
    .then(id => {
      meeting.attendees.forEach(attendee => {
        console.log(attendee.userId);
        createAttendee(attendee.userId, id[0]);
      });
    });
}

function createAttendee(user_id, meeting_id) {
  console.log('create attendee');
  return db('attendees').insert({
    user_id: user_id,
    meeting_id: meeting_id
  });
}

module.exports = {
  getUserMeetingHistory,
  getMeetingInfo,
  saveMeeting
};
