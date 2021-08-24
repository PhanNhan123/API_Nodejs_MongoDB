const express = require('express');
const router = express.Router(); 
//product model
const Products = require('../../models/Products');
//@router GET http://localhost:5000/api/products
// select all product 
router.get('/', async (req,res)=>{
    try{
        const products = await Products.find();
        if(!products) throw Error('No items');
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({msg : err})   
    }
});
//@router GET http://localhost:5000/api/products/top3
// select top3  product  
router.get('/top3', async (req,res)=>{
    try{
        // 1 asc , -1 desc 
        const products = await Products.find().sort({_create_at: -1}).limit(3);
        if(!products) throw Error('No items');
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({msg : err})   
    }
});
//@router GET http://localhost:5000/api/products/top6
// select top3  product  
router.get('/top6', async (req,res)=>{
    try{
        // 1 asc , -1 desc 
        const products = await Products.find().sort({_create_at: -1}).limit(6);
        if(!products) throw Error('No items');
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({msg : err})   
    }
});
//@router POST http://localhost:5000/api/products
// insert product
router.post('/',async (req,res)=>{
//   console.log(req.body);
    const newProduct = new Products(req.body);
    try{
        const product = await newProduct.save();
        if(!product) throw Error('Something went wrong while  saving  the product')
        res.status(200).json(product);
    }catch(err){
        res.status(400).json({msg : err})
    }
});

//@router DELETE http://localhost:5000/api/products/$id
// delete product
router.delete('/:id', async (req,res)=>{
    try{
        const product = await Products.findByIdAndDelete(req.params.id);
        if(!product) throw Errow('No product found!');
        res.status(200).json({success: true})
    }catch(err){
        res.status(400).json({msg : err})
    }
});
//@router PATCH http://localhost:5000/api/products/$id
// update product
router.patch('/:id', async (req,res)=>{
    try{
        const product = await Products.findByIdAndUpdate(req.params.id, req.body);
        if(!product) throw  Error('Something went wrong while updating the product!');
        res.status(200).json({success: true})
    }catch(err){
        res.status(400).json({msg : err})
    }
});
//@router GET http://localhost:5000/api/products/$id
// select one
router.get('/:id', async (req,res) => {
    try{
        const product = await Products.findById(req.params.id);
        if(!product) throw Error('No item');
        res.status(200).json(product)
    }catch(err){
        res.status(400).json({msg : err})
    }
});
module.exports =router;