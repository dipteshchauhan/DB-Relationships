const mongoose=require('mongoose');
 
const StaffSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }

},{timestamps:true});

module.exports=mongoose.model('Staff',StaffSchema);
