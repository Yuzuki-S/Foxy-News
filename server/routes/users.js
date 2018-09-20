const router = require("express").Router()

// Get the users of the app
router.get("/", (req, res) => {
  res.send("I'm here in USERS") //working
})

module.exports = router
