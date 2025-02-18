import express from "express"
import {loginUser,userSignUp,adminLogin} from '../controllers/userController.js'

const userRouter= express.Router();


userRouter.post('/signUp',userSignUp)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)


export default userRouter