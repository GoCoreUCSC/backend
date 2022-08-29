const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)

router.post('/activities', actions.addActivity)
router.get('/getactivities', actions.viewActivity)
router.get('/getactivities1', actions.viewActivity1)
router.get('/getactivities2', actions.viewActivity2)
router.get('/getactivities3', actions.viewActivity3)
router.get('/getactivities4', actions.viewActivity4)

router.post('/addhotels', actions.addHotel)
router.get('/viewhotels', actions.viewHotel)

router.get('/viewplans', actions.viewPlan)
router.post('/addplans', actions.addPlan)

router.get('/viewcabs', actions.viewCab)
router.post('/addcabs', actions.addCab)


module.exports = router