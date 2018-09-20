const router = require('express').Router()
// const {functionsfromDB} = require('../db/meetings')

router.get('/', (req, res) => {
    db.getMeetings().then((meetings) => {
        res.json(meetings)
    })
})

router.get('/:id', (req, res) => {
    db.getMeetingsById(req.params.id).then((meetings) => {
        res.json(meetings)
    })
})

router.get('/:meeting_name', (req, res) => {
    db.getMeetingsByName(req.params.meeting_name)
    .then((meetings) => {
        res.json(meetings)
    })
})

router.post('/', (req, res) => {

    db.getMeetings().then((meetings) => {
        res.json(meetings)
    })
})


module.exports = router