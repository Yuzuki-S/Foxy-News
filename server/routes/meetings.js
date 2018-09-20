const router = require("express").Router()
// const {imported_functions} = require('../db/meetings')


// ------- Get a Users Meeting Histroy
router.get("/", (req, res) => {
  db.getUsersMeetings()
  .then(usersMeetings => {
    let x = usersMeetings.map(eachMeeting => {
      return getMeeting(eachMeeting.id)
    })
    .then(data => {
      res.json(data)
    }
    )
  })
  .catch(err => res.status(500)
    .send({
      message: "Server Error"
    }))
})

// ------- Save a completed meeting
router.post("/", (req, res) => {
  saveMeeting()
  .then(meeting => {
    res.json(meeting)
  })
  .catch(err => res.status(500)
    .send({
      message: "Server Error"
    }))
})


// ------- Get the attendees of a Meeting
router.get("/:id/users", (req, res) => {
  db.getAttendees(req.params.id)
  .then(attendees => {
    // modify as required
    res.json(attendees)
  })
  .catch(err => res.status(500)
    .send({
      message: "Server Error"
    }))
})


module.exports = router




// // Test content
// const meetings = [
//     {
//       "id" : 1,
//       "meetingName" : "First meeting",
//       "attendees" : [
//         {
//         "userId" : 1234,
//         "userName" : "handle name",
//         "firstName" : "Name",
//         "lastName" : "Name",
//         "personCostPerHour" : 100.00,
//         }
//       ],
//       "time": "timestamp",
//       "meetingCostPerHour" : 250.00,
//       "totalMeetingTimeSeconds" : 360,
//       "totalCostOfMeeting" : 6000.00
//     },
//     {  "id" : 2,
//       "meetingName" : "Second meetings",
//       "attendees" : [
//         {
//         "userId" : 5678,
//         "userName" : "handle name",
//         "firstName" : "Name",
//         "lastName" : "Name",
//         "personCostPerHour" : 100.00,
//         }
//       ],
//       "time": "timestamp",
//       "meetingCostPerHour" : 250.00,
//       "totalMeetingTimeSeconds" : 360,
//       "totalCostOfMeeting" : 6000.00
//     }
//   ]

// // // Test send to Postman - working
// // router.get("/", (req, res) => {
// //   res.send(meetings)
// // })
