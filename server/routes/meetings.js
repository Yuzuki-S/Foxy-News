const router = require("express").Router()

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

console.log(meetings[0]["id"])

// test send
router.get("/", (req, res) => {
  res.send(meetings) // returns object in meetings
})

// // Get a Users Meeting Histroy
// router.get("/", (req, res) => {
  //
// })

// // Save a completed meeting
// router.post("/", (req, res) => {
//   // 
// })

// // Get the attendees of a Meeting
// router.get("/:id/users", (req, res) => {
//   // 
// })


module.exports = router
