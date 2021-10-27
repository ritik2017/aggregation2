const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    customer: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Sale", saleSchema);