const express = require('express');
const mongoose = require('mongoose');

const SaleModel = require('./Model/Sale');

const mongodbURI = 'mongodb://localhost:27017/octSales';

mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => {
    // console.log(res);
    console.log('Mongodb Connected');
})

const app = express();

app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(4000, () => {
    console.log("Listening on 4000");
})

// SaleModel.insertMany([
//     {product: 'Earphones', price: 1000, customer: 'Rahul'},
//     {product: 'Usb Port', price: 500, customer: 'Rohit'},
//     {product: 'Mouse', price: 700, customer: 'Virat'},
//     {product: 'Keyboard', price: 1500, customer: 'Rahul'},
//     {product: 'Earphones', price: 1000, customer: 'Rohit'},
//     {product: 'Usb Port', price: 500, customer: 'Virat'},
//     {product: 'Earphones', price: 1000, customer: 'Rahul'},
// ])

// count, distint 

// SaleModel.count('customer')
// .then((res) => {
//     console.log(res);
// })

SaleModel.aggregate([
    {$match: {price: {$lt: 1000}}},
    // {$group: {_id: '$customer', total: {$sum: '$price'}}},
    {$sort: {price: 1}}
])
.then(res => {
    console.log(res);
})

// 1. Group - Customer
// 2. Customer, total = Sum of value

// $group, $sum, $lt, $eq, $gt, $sort (1 asc, -1 dsc)

// Group - cutomer - Rahul (- USB, Earphones), Rohit, Virat 

