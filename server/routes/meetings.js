const router = require('express').Router()

// import db

// router.get('/api/meetings', (req, res) => {
//     db.getMeetings().then((meetings) => {
//         res.json(meetings)
//     })
// })

// router.get('/api/meetings/:id', (req, res) => {
//     db.getMeetingsById(req.params.id).then((meetings) => {
//         res.json(meetings)
//     })
// })

// router.get('/api/meetings/:meeting_name', (req, res) => {
//     db.getMeetingsByName(req.params.meeting_name)
//     .then((meetings) => {
//         res.json(meetings)
//     })
// })

// router.post('/api/meetings', (req, res) => {

//     db.getMeetings().then((meetings) => {
//         res.json(meetings)
//     })
// // })
// const meetings = [
//     {
//       "id" : 1,
//       "meetingName" : "meeeeeeting",
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
//     }
//   ]


// router.get('/:id', (req, res) => {
//     db.getMeetingsById(meetings.id).then((meetings) => {
//         res.send(meetings)
//     })


// })

router.get('/', function (res, req) {
    console.log("blah!")
    res.send("hii")
})
  

module.exports = router