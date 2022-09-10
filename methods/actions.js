var User = require('../models/user')
var Activity = require('../models/activity')
var Hotel = require('../models/hotel')
var Plan = require('../models/tourPlan')
var Cab = require('../models/cab')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNew: async function (req, res) {
        if ((!req.body.name) || (!req.body.email) || (!req.body.password)) {
            
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            const userStatus = await  User.findOne({email: req.body.email}).exec();
            if(userStatus){
                res.json({error: true, errmsg: 'not valid'});
            }
            else
            {var newUser = User({
                user_role:"tourist",
                name: req.body.name,
                email:req.body.email,
                password: req.body.password,
               
            });}
            newUser.save(function (err, newUser) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },

    addGuide: async function (req, res) {
        if ((!req.body.name) || (!req.body.email) || (!req.body.nic) || (!req.body.address) || (!req.body.contact_no) ||  (!req.body.password) ||  (!req.body.image) ||  (!req.body.certification)) {
            
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            const userStatus = await  User.findOne({email: req.body.email}).exec();
            if(userStatus){
                res.json({error: true, errmsg: 'not valid'});
            }
            else
            {var newUser = User({
                user_role:"guide",
                name: req.body.name,
                email:req.body.email,
                nic: req.body.nic,
                address: req.body.address,
                contact_no:req.body.contact_no,
                password: req.body.password,
                image: req.body.image,
                certification: req.body.certification,
               
            });}
            newUser.save(function (err, newUser) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },

    
    addpicture: async function (req, res) {
        if ((!req.body.image)) {
            
            res.json({success: false, msg: 'Enter all fields'})
        }
            else
            { newUser = User({
                name: "k",
                email:"k",
                password: "k",
                image: req.body.image,
               
            });}
            newUser.save(function (err, newUser) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        
    },

    authenticate: function (req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {
                if (err) throw err
                if (!user) {
                    res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
                }

                else {
                    user.comparePassword(req.body.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            var token = jwt.encode(user, config.secret)
                            res.json({success: true, token: token})
                        }
                        else {
                            return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                        }
                    })
                }
        }
        )
    },
    getinfo: function (req, res) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1]
            var decodedtoken = jwt.decode(token, config.secret)
            return res.json({success: true, msg: decodedtoken.name })
        }
        else {
            return res.json({success: false, msg: 'No Headers'})
        }
    },

    addActivity: function (req, res) {
        if ((!req.body.activity) || (!req.body.place) || (!req.body.description)|| (!req.body.img)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newActivity = Activity({
                activity: req.body.activity,
                place: req.body.place,
                description: req.body.description,
                img: req.body.img
            });
            newActivity.save(function (err, newActivity) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },

//     viewActivity: function (req, res){ Activity.find((err, docs) => {
//         if (!err) {
//             res.render("list", {
//                 data: docs
//             });
//         } else {
//             console.log('Failed to retrieve the Course List: ' + err);
//         }
//     })
// },  

filterDestination: async function  (req,res){
    try{
        const guide_add_plan = await Activity.find({Activities: "Hiking"})
        res.json(guide_add_plan)
    }
    catch(err){
        res.send('Error'+err)
    }
}, 
        
viewActivity: async function  (req,res){
    try{
        const activities = await Activity.find()
        res.json(activities)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActivity1: async function  (req,res){
    try{
        const activity = await Activity.find({ activity: "Hiking" })
        res.json(activity)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActivity2: async function  (req,res){
    try{
        const activity = await Activity.find({ activity: "Ballooning" })
        res.json(activity)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActivity3: async function  (req,res){
    try{
        const activity = await Activity.find({ activity: "Kayaking" })
        res.json(activity)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActivity4: async function  (req,res){
    try{
        const activity = await Activity.find({ activity: "Surfing" })
        res.json(activity)
    }
    catch(err){
        res.send('Error'+err)
    }
},



addHotel: function (req, res) {
    if ((!req.body.hotelName) || (!req.body.noOfRooms) || (!req.body.location) || (!req.body.manager) || (!req.body.phnNo)|| (!req.body.img)) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else {
        var newHotel = Hotel({
            hotelName: req.body.hotelName,
            noOfRooms: req.body.noOfRooms,
            location: req.body.location,
            manager: req.body.manager,
            phnNo: req.body.phnNo,
            img: req.body.img
        });
        newHotel.save(function (err, newHotel) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
},

viewHotel: async function (req, res) {
    try{
        const hotels = await Hotel.find()
        res.json(hotels)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewPlan: async function (req, res) {
    try{
        const plan = await Plan.find()
        res.json(plan)
    }
    catch(err){
        res.send('Error'+err)
    }
},
  
addPlan: async function (req, res) {
    if ((!req.body.planId) || (!req.body.destination) || (!req.body.rating) || (!req.body.price) || (!req.body.img) ) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else {
        var newPlan= Plan({
            planId: req.body.planId,
            destination: req.body.destination,
            rating: req.body.rating,
            price: req.body.price,
            img:req.body.img
        });
        newPlan.save(function (err, newPlan) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
},

viewCab: async function (req, res) {
    try{
        const cab = await Cab.find()
        res.json(cab)
    }
    catch(err){
        res.send('Error'+err)
    }
},
  
addCab: async function (req, res) {
    if ((!req.body.driverName) || (!req.body.rating) || (!req.body.noReview) || (!req.body.rate) || (!req.body.vehicle) || (!req.body.passsengers) || (!req.body.city) ) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else {
        var newCab= Cab({
            driverName: req.body.driverName,
            rating: req.body.rating,
            noReview: req.body.noReview,
            rate: req.body.rate,
            vehicle: req.body.vehicle,
            passsengers: req.body.passsengers,
            city: req.body.city
        });
        newCab.save(function (err, newCab) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
},


}



module.exports = functions