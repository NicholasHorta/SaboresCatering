const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const saboresContact = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
    reference: String,
    interest: Array,
    allergies: Array,
    addInfo: String
})

const Sabores = mongoose.model('Sabores', saboresContact)


router.get('/', function (req, res, next) {
    res.render('home');
});

router.post('/', function (req, res, next) {
    const name = req.body.name,
        email = req.body.email,
        tel = req.body.tel,
        reference = req.body.reference,
        interest = req.body.interest,
        allergy = req.body.allergy,
        addInfo = req.body.addInfo
    const allData = { name: name, email: email, tel: tel, reference: reference, interest: interest, allergies: allergy, addInfo: addInfo }
    Sabores.create(allData, function (err, newInterest) {
        if (err) {
            console.log(err)
        }
        console.log(newInterest)
        res.redirect('/')
    })

})

module.exports = router;
