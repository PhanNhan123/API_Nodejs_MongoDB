const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    _category_id:{
        type: Number,
        require: true,
    },
    _category_name:{
        type: String,
        require: true,
    },
    _image:{
        type: String,
        require: true,
    },
    _create_at: {
        type: Date,
        default: Date.now,
    },
    _update_at:{
        type: Date,
        default: null,
    },
});
module.exports = mongoose.model('Categories',CategorySchema)