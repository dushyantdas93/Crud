const User = require("../models/user.model")

module.exports.addUser = async(req,res)=>{
    try {
        const {name,email,role}=req.body;
       
        if([name,email,role].some(item=> !item || item.trim().length===0)){
           res.json({
            success:false,
            msg:"all field are required !"
           })
        }
        const existUser = await User.findOne({email:email})
        if(existUser){
            res.json({
                success:false,
                msg:"User is already exist !"
            })
        }
        await User.create({name,email,role})
        res.json({
            success:true,
            msg:"User created successfully !"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:"Internal server error !"
        })
    }
}

module.exports.getAllUsers = async(req,res)=>{
    try {
     
        const users = await User.find();
        res.json({
            success:true,
            msg:"Users fetched successfully !",
            data:users
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:"Internal server error !"
        })
    }
}


module.exports.getUser = async(req,res)=>{
    try {
        const user = await User.findOne({_id:req.params.id})
        if(!user){
            res.json({
                success:false,
                msg:"User not found !"
            })
        }
        res.json({
            success:true,
            msg:"User found",
            data:user
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:"Internal server error !"
        })
    }
}


module.exports.deleteUser = async(req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete({_id:req.params.id})
        if(deletedUser){
         res.json({
            success:true,
            msg:"User deleted successfully !"
         })
        }else{
            res.json({
                success:false,
                msg:"User not found !"
             }) 
        }
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:"Internal server error !"
        })
    }
}

module.exports.editUser = async(req,res)=>{
    try {
        const {name,email,role}=req.body;

        if([name,email,role].some(item=>item.trim().length===0)){
            res.json({
             success:false,
             msg:"all field are required !"
            })
         }
         
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {name,email,role}, { new: true });
        if(updatedUser){
         res.json({
            success:true,
            msg:"User updated successfully !",
            data:updatedUser
         })
        }else{
            res.json({
                success:false,
                msg:"User not updated !",
             })
        }
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            msg:"Internal server error !"
        })
    }
}