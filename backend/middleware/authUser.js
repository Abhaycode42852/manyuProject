import jwt from 'jsonwebtoken'
const authUser=async(req,res,next)=>{
try {
    const {token}=req.headers
    if(!token){
        return res.json({success:false,message:"Invalid Credential"})
    }
    const trueToken=jwt.verify(token,process.env.JWT_SECRET)
    req.body.userId=trueToken.id
    next()
} catch (error) {
    console.error(error)
        res.json({sucess:false,message:error.message})
}
}


export default authUser