const router = require("express").Router()
const {
  getUserMeetingHistory,
  getMeetingInfo,
  saveMeeting,
  getAllMeetings
} = require('../db/meetings')


// Get a Users Meeting Histroy
router.get("/:id", (req, res) => {
  db.getUserMeetingHistory()
  .then(arrayOfMeetings => {
    let arr = arrayOfMeetings.map(eachMeeting => {
      return getMeetingInfo(eachMeeting.meeting_id)
    })
    Promise.all(arr)
    .then(info => {
      res.json(info)
    })
  })
  .catch(err => res.status(500)
  .send({
    message: "Server Error"
  }))
})

router.post('/', (req, res) => {
  db.saveMeeting()
  .then(meeting => {
    res.json(meeting)
  })
  .catch(err => res.status(500)
  .send({
    message: "Server Error"
  }))
})

router.get('/:id/users', (req, res) => {
  db.getMeetingAttendees(req.params.id)
  .then(attendees => {
    res.json(attendees)
  })
  .catch(err => res.status(500)
  .send({
    message: "Server Error"
  }))
})



module.exports = router