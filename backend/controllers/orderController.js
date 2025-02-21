import orderModle from "../models/orderModel.js"
import userModel from '../models/UserModel.js'
// COD
const placeOrder=async(req,res)=>{
    try {
        const {userId,items,amount,address}=req.body
        
        const orderdata={userId,items,amount,address,paymentMethod:"COD",payment:false,date:Date.now()}

        const newOrder=new orderModle(orderdata)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {
        console.error(error)
        res.json({success:true,message:error.message})
    }
}
// Stripe
const placeOrderStripe=async(req,res)=>{

}
// razorpay
const placeOrderRazorpay=async(req,res)=>{

}


// All orders for admin

const allOrders=async(req,res)=>{
    
}


// User Orders
const userOrders=async(req,res)=>{
    try {
        const {userId}=req.body
        const orders= await orderModle.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.error(error)
        res.json({success:false,message:error.message})
        
    }
}



// update order Status for admin
const updateStatus=async(req,res)=>{
    
}


export {placeOrder,allOrders,userOrders,updateStatus,placeOrderStripe,placeOrderRazorpay}
