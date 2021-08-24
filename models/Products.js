const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
{
    _product_name: {
        type: String,
        require: true,
    },
    _category_id: {
        type: Number,
        require: true,
    },
    _image: {
        image_1:{
        type: String
       },
        image_2:{
        type: String
       },
        image_3:{
            type: String
        },
        image_4:{
            type: String
        },
    },
    _description:{
        type: String,
    },
    _create_at: {
        type: Date,
        default: Date.now,
    },
    _product_price:{
        type: Number,
    },
    _tags:{
        type: String,
    },
    _update_at:{
        type: Date,
        default: null,
    }


});
module.exports = 
mongoose.model('Products',ProductSchema)