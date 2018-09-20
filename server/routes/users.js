const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("I'm here in USERS") //working
})

module.exports = router
