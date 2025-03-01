import express from 'express'
import {placeOrder,allOrders,userOrders,updateStatus,placeOrderStripe,placeOrderRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/authUser.js'

const orderRouter=express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// payment feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/Razorpay',authUser,placeOrderRazorpay)

// User Feature
orderRouter.post('/userorders',authUser,userOrders)


export default orderRouter