const express=require("express")
const User=require("../models/User");

const router=express.Router();

router.post("/users",async(req,res)=>{
    try{
        const user=new User(req.body)
        await user.save();
        res.status(201).send(user)
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.get("/users",async(req,res)=>{
    try{
        const user=await User.find({})
       
        res.status(201).send(user)
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.get("/users/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
       if(!user){
        res.status(404).send()
       }
       res.status(201).send(user) 
    }
        catch(error){
        res.status(400).send(error)
    }
})


router.put("/users/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
       if(!user){
        res.status(404).send()
       }
       res.status(201).send(user) 
    }
        catch(error){
        res.status(400).send(error)
    }
})

router.delete("/users/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
       if(!user){
        res.status(404).send()
       }
       res.status(201).send(user) 
    }
        catch(error){
        res.status(400).send(error)
    }
})

module.exports=router;