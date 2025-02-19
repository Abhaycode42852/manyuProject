import userModel from '../models/UserModel.js';
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


const createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)

}


// Login Route
const loginUser=async(req,res)=>{

    try {
        const {email , password}= req.body

        const user=await userModel.findOne({email})
        if (!user) {
            return res.json({sucess:false,message:"User doen't exists"})
        }

        const isMatch= await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false,message:"Inavalid Credentials"})
        }
        const token= createToken(user._id)
        res.json({sucess:true,token})
    } catch (error) {
        console.error(error)
        res.json({success:false,message:error.message})
        
    }

}

// SignUp Route

const userSignUp=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        // User Exists or not
        const exists=await userModel.findOne({email})
        if(exists){
            return res.json({success:false, message:"User Alredy exists"})
        }
        
        // validating email
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Enter a valid email"})
        }
        if (password.length<8) {
            return res.json({success:false, message:"Enter a strong password"})
        }
        // password hassing
        const salt=await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)
        

        const newUser=new userModel({
            name,
            email,
            password:hashedPassword
        })
        
        const user=await newUser.save()

        const token = createToken(user._id)

        res.json({success:true,token})


    } catch (error) {
        console.error(error)
        res.json({success:false,message:error.message})
    }
}

// Admin Login

const adminLogin=async(req,res)=>{
    try {
        const {email , password}=req.body
        if (email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD) {
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.error(error)
        res.json({sucess:false,message:error.message})
    }

}



export {loginUser,userSignUp,adminLogin}