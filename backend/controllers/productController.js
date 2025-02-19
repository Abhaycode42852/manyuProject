import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"
// Addition of product
const addProduct= async(req,res)=>{
    try {
        
        const {name, description,price,category,subcategory,sizes,bestseller}=req.body
        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)
        
        let imagesUrl= await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )
        
        const productData={
            name,description,category,subcategory,price:Number(price),bestseller:bestseller==="true"?true:false,sizes:JSON.parse(sizes),image:imagesUrl,date:Date.now()
        }

        const product=new productModel(productData);
        await product.save()

        res.json({success:true,message:"Product Added Sucessfully"})

    } catch (error) {
        console.error(error)
        res.json({sucess:false,message:error.message})
    }


}
// List of product
const listProduct= async(req,res)=>{
    try {
        const products=await productModel.find({});
        res.json({sucess:true,products})
    } catch (error) {
        console.error(error)
        res.json({sucess:false,message:error.message})
    }

}
// deletion of product
const removeProduct= async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({sucess:true,message:"Product Removed"})
    } catch (error) {
        console.error(error)
        res.json({sucess:false,message:error.message})
    }

}
// selected product detail
const singleProduct= async(req,res)=>{
    try {
     const {productId}=req.body
     const product=await productModel.findById(productId)
     res.json({sucess:true,product})

    } catch (error) {
        console.error(error)
        res.json({sucess:false,message:error.message})
    }

}


export {listProduct,addProduct,removeProduct,singleProduct}




