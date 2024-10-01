const Staff=require('../models/staffModel');

exports.create= async (req,res)=>{

    try{
    const {name,email}=req.body;
    const staff=new Staff({
        name,
        email
    })
    const saveStaff=await staff.save()

    // const staffData=a
    return res.status(200).json(saveStaff);
}catch(error){
    console.log("got error in staffcontroller create method");
   return res.status(400).json({message:message.error});
   
}

}