const express = require('express');
const router = express.Router();

const Category = require('../../models/Category')
//@router GET http://localhost:5000/api/categories
// select all category 
router.get('/', async (req,res)=>{
    try{
        const category = await Category.find();
        if(!category) throw Error('No items');
        res.status(200).json(category)
    }catch(err){
        res.status(400).json({msg : err})   
    }
});
//@router POST http://localhost:5000/api/categories
// insert category
router.post('/',async (req,res)=>{
    //   console.log(req.body);
        const newCategory = new Category(req.body);
        try{
            const category = await newCategory.save();
            if(!category) throw Error('Something went wrong while  saving  the category')
            res.status(200).json(category);
        }catch(err){
            res.status(400).json({msg : err})
        }
    });
//@router DELETE http://localhost:5000/api/categogies/$id
// delete category
router.delete('/:id', async (req,res)=>{
    try{
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) throw Errow('No product found!');
        res.status(200).json({success: true})
    }catch(err){
        res.status(400).json({msg : err})
    }
});
//@router PATCH http://localhost:5000/api/categories/$id
// update category
router.patch('/:id', async (req,res)=>{
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body);
        if(!category) throw  Error('Something went wrong while updating the category!');
        res.status(200).json({success: true})
    }catch(err){
        res.status(400).json({msg : err})
    }
});
//@router GET http://localhost:5000/api/categories/$id
// select one
router.get('/:id', async (req,res) => {
    try{
        const category = await Category.findById(req.params.id);
        if(!category) throw Error('No item');
        res.status(200).json(category)
    }catch(err){
        res.status(400).json({msg : err})
    }
});
module.exports =router;