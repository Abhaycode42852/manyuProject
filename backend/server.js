import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mogodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'


//App Config
const app=express()
const port=process.env.PORT||4000
connectDb()
connectCloudinary()


//middlewares
app.use(express.json())
app.use(cors())



//API endpoints

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
 res.send('API working')
})


app.listen(port,()=> console.log("server running on Port:"+port))