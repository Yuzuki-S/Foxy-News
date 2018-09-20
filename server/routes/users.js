const router = require("express").Router()

// ----------------------- Test send json - working in Postman
router.get("/", (req, res) => {
  res.json({
  "array" : [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00
    },
    {
      "id" : 5678,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00
    }
  ]
})
})



// ----------------------- WIP promises, not currently working

// function getUsers() {
// const arr = 
// {"array" : [
//       {
//         "id" : 1234,
//         "userName" : "handle name",
//         "firstName" : "Name",
//         "lastName" : "Name",
//         "personCostPerHour" : 100.00
//       },
//       {
//         "id" : 5678,
//         "userName" : "handle name",
//         "firstName" : "Name",
//         "lastName" : "Name",
//         "personCostPerHour" : 100.00
//       }
//     ]
//   }

// return arr
// }
// // Get the users of the app
// router.get("/", gUsers)

// function gUsers(req, res) {
//     res.json(getUsers())
//  }
//   // .catch(err => res.status(500).send({message: "Server Error"}))


module.exports = router
