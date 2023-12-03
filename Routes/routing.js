const express=require('express')
const {adminSignup, adminLogin, travelbooking, bookingDetails, addPackages, getAllPackages, getSinglePackage}=require('../Controllers/Logic')
const upload = require('../middlewares/multermiddleware')
const router= new express.Router()

//path for admin register
router.post('/admin/admin-signup',adminSignup)
//path for admin login
router.post('/admin/admin-signin',adminLogin)
//path for booking
router.post('/admin/travel-booking',travelbooking)
//path for get booking details
router.get('/admin/get-bookingdetails',bookingDetails)
//path for add pakage
router.post('/admin/add-package',upload.single('user_profile'),addPackages)
//path for get all packages
router.get('/admin/get-packages',getAllPackages)
//path for get single package
router.get('/admin/get-singlepackage/:id',getSinglePackage)
module.exports=router