const express= require('express');
const router=new express.Router;
const Staff=require('../controllers/staffController');
const Right=require('../controllers/rightController');

router.post('/staff/create',Staff.create);
router.post('/right/create',Right.rightCreate);
router.get('/right/populate',Right.staffByRigh);
module.exports=router;