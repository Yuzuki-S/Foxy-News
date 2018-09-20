const router = require("express").Router()

// Test send json - working in Postman
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

// function getUsers() {
// let arr = 
//   [
//     {
//       "id" : 1234,
//       "userName" : "handle name",
//       "firstName" : "Name",
//       "lastName" : "Name",
//       "personCostPerHour" : 100.00,
//     },
//     {
//       "id" : 5678,
//       "userName" : "handle name",
//       "firstName" : "Name",
//       "lastName" : "Name",
//       "personCostPerHour" : 100.00,
//     },
//   ]

// return arr
// }

// // Get the users of the app
// router.get("/", (req, res) => {
//   getUsers()
//   .then(users => {
//     const thing = users.map(user => {
//       return user 
//     })
//   })
//   res.json(thing)
// })

module.exports = router
