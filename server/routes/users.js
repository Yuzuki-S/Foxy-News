const router = require("express").Router()

// Get the users of the app
router.get("/", (req, res) => {
  res.send("I'm here in USERS") //working

  // db.getUsers() // will not work until db functions are written
  // .then(user => {
  //   res.json(user)
  // })
})

module.exports = router
