import jwt from "jsonwebtoken"

const adminAuth=(req,res,next)=>{
try {
    const {token}=req.headers
    if(!token){
        return res.json({success:false,message:"Invalid Credential"})
    }
    const trueToken=jwt.verify(token,process.env.JWT_SECRET)
    if (trueToken!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
        return res.json({success:false,message:"Invalid Credential"})
    }
    next()
} catch (error) {
    console.error(error)
        res.json({sucess:false,message:error.message})
}
}


export default adminAuth