const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error('Please enter a valid email')
        }
    },
    phno:{
        type:Number,
        required:true,
        length:10,
        validate(value){
            if(value<0)
            throw new Error('please enter a valid phone number')
        }
    },
    add:{
        type:String,
        required:true,
        trim:true
    },
    pass:{
        type:String,
        trim:true,
        required:true,
        minlength:8,
        validate(value){
            if(value.toLowerCase().includes('password'))
            throw new Error('password must not contain "password" as a substring')
        }
    },
    tokens:[{
        token:{
            type:String,
            required : true
        }
    }]
},
{
    timestamps:true
})


userSchema.methods.generateToken = async function(){
    const user=this;
    const token = jwt.sign({_id:user.id.toString()},"thisismysecret")

    user.tokens = user.tokens.concat({token})

    await user.save();

    return token;
}


userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('pass'))
    user.pass = await bcrypt.hash(user.pass,8)

    next();
})

userSchema.statics.findByCred = async function({email,pass}){
    const user = await User.findOne({email});

    if(!user)
    throw new Error("Unable to Login")

    const match = await bcrypt.compare(pass,user.pass)

    if(!match)
    throw new Error("Unable to Login")

    return user;
}

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    delete userObject.pass;
    delete userObject.tokens;

    return userObject;
}

const User= mongoose.model('User',userSchema)

module.exports=User