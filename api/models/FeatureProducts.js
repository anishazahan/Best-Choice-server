const mongoose = require('mongoose');

const FeatureProductSchema = new mongoose.Schema({
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
        type: Array,
        required: true,
    },
},


    {
        timestamps: true
    });

const featureProduct = mongoose.model('featureProduct', FeatureProductSchema);

module.exports = featureProduct ;