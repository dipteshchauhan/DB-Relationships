const Right=require('../models/rightModel');

exports.rightCreate=async(req,res)=>{

  try{

    const right=new Right({
        staff_id:req.body.staff_id,
        right:req.body.right
    })
    const rightData=await right.save();
    return res.status(201).send(rightData);
  }catch(error){
    return res.status(500).send({message:'Erroe Creating right',error})
  }
}

exports.staffByRigh=async(req,res)=>{
    const rightData=await Right.find({_id:req.body.right_id}).populate('staff_id');
    res.send(rightData);
}