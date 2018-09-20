const router = require("express").Router()
let {getUsers} = require("../db/users");


// ----------- Get the users of the app
router.get("/", (req, res) => {
  getUsers()
   .then(users => {
    res.json(users)
  })

  .catch(err => res.status(500)
    .send({
      message: "Server Error"
    })
  )
})


module.exports = router

