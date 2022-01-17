const express=require('express')
const User= require('../models/user')
const router= new express.Router()
const auth = require('../middleware/auth')


router.get('/',(req,res)=>{
    res.send("gotcha")
})

router.post('/register', async (req,res)=>{
    const user = new User(req.body)
    try{
       // console.log(req.body)
        await user.save();
        const token = await user.generateToken();
        res.status(201).send({user,token})
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
})


router.post('/user/login',async(req,res)=>{
    try{    
        const user = await User.findByCred(req.body)
        const token = await user.generateToken();
        res.send({user,token})
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})


router.get('/user/profile',auth,async (req,res)=>{{
    try{
        const user = req.user;

        res.send(user)
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
}})

router.get('/user/logout',auth, async (req,res)=>{
    
    try{
        req.user.tokens=[];
        await req.user.save();
        res.send();
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }

})




module.exports = router