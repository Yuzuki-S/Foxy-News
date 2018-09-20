const router = require("express").Router()
// const {functionsfromDB} = require('../db/meetings')

// -------------------------------- Test content - working in Postman
// Get a Users Meeting Histroy
router.get("/", (req, res) => {
  res.json(meetings)
})

// Test content
const meetings = [
    {
      "id" : 1,
      "meetingName" : "First meeting",
      "attendees" : [
        {
        "userId" : 1234,
        "userName" : "handle name",
        "firstName" : "Name",
        "lastName" : "Name",
        "personCostPerHour" : 100.00,
        }
      ],
      "time": "timestamp",
      "meetingCostPerHour" : 250.00,
      "totalMeetingTimeSeconds" : 360,
      "totalCostOfMeeting" : 6000.00
    },
    {  "id" : 2,
      "meetingName" : "Second meetings",
      "attendees" : [
        {
        "userId" : 5678,
        "userName" : "handle name",
        "firstName" : "Name",
        "lastName" : "Name",
        "personCostPerHour" : 100.00,
        }
      ],
      "time": "timestamp",
      "meetingCostPerHour" : 250.00,
      "totalMeetingTimeSeconds" : 360,
      "totalCostOfMeeting" : 6000.00
    }
  ]

// // Test send to Postman - working
// router.get("/", (req, res) => {
//   res.send(meetings)
// })



// -------------------------------- Proper routes - currently waiting on db functions and promises

// // Get a Users Meeting Histroy
// router.get("/", (req, res) => {
//   db.getMeetings()
//   .then((meetings) => {
//       res.json(meetings)
//   })  
// })

// // Save a completed meeting
// router.post("/", (req, res) => {
//   // placeholder
// })

// // Get the attendees of a Meeting
// router.get("/:id/users", (req, res) => {
//   db.getMeetingsById(req.params.id)
//   .then((meetings) => { 
// //to be id of meeting used to return meeting users?
//       res.json(meetings)
//   })
// })

module.exports = router