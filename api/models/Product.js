const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000
    },
    category: {
        type: String,
        required: true
    },
    description1: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000
    },
    description2: {
        type: String,
    },
    brand :{
        type: String,
        required: true,
    },
    Weight : {
        type: String,
    },
    sku : {
        type: String,
    },
    descriptionTittle1 : {
        type: String,
    },
    descriptionTittle2 : {
        type: String,
    },
    fetaure : {
        type: String,
        required: true,
    },
},


    {
        timestamps: true
    });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;