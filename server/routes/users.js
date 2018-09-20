const router = require("express").Router()

// // Test send json - working in Postman
// router.get("/", (req, res) => {
//   res.json({
//   "array" : [
//     {
//       "id" : 1234,
//       "userName" : "handle name",
//       "firstName" : "Name",
//       "lastName" : "Name",
//       "personCostPerHour" : 100.00
//     },
//     {
//       "id" : 5678,
//       "userName" : "handle name",
//       "firstName" : "Name",
//       "lastName" : "Name",
//       "personCostPerHour" : 100.00
//     }
//   ]
// })
// })



// Get the users of the app
router.get("/", (req, res) => {
  getUsers()
   .then(users => {
    res.json(users)
  })
  // .then(users => {
  //   users.map(user => {
  //     return user // modify as needed
  //   })
  //   res.json(users)
  // })

  .catch(err => res.status(500)
    .send({
      message: "Server Error"
    })
  )
})


module.exports = router




// let { getUsers } = require("../db/users");

// router.get("/", getUsersAPI);

// function getUsersAPI(req, res, next) {
//   getUsers().then(users => {
//     console.log(users);
//     res.json(users);
//   });
// }
