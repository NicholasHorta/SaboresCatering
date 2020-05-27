const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/saboresCatering');


const saboresContact = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
    reference: String,
    interest: String,
    allergies: String,
    addInfo: String
})

const Sabores = mongoose.model('Sabores', saboresContact)


module.exports = contact;