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

console.log(meetings)

// test send
router.get("/", (req, res) => {
  res.send(meetings) // returns object in meetings
})

// router.post("/", (req, res) => {
//   // 
// })

router.get("/:id/users", (req, res) => {
  // 
})





module.exports = router

// // router.get('/api/meetings', (req, res) => {
// //     db.getMeetings().then((meetings) => {
// //         res.json(meetings)
// //     })
// // })

// // router.get('/api/meetings/:id', (req, res) => {
// //     db.getMeetingsById(req.params.id).then((meetings) => {
// //         res.json(meetings)
// //     })
// // })

// // router.get('/api/meetings/:meeting_name', (req, res) => {
// //     db.getMeetingsByName(req.params.meeting_name)
// //     .then((meetings) => {
// //         res.json(meetings)
// //     })
// // })

// // router.post('/api/meetings', (req, res) => {

// //     db.getMeetings().then((meetings) => {
// //         res.json(meetings)
// //     })
// // // })



// // router.get('/:id', (req, res) => {
// //     db.getMeetingsById(meetings.id).then((meetings) => {
// //         res.send(meetings)
// //     })


// // })
