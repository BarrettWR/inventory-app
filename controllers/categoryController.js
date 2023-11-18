const asyncHandler = require("express-async-handler");
let mongoose = require('mongoose')

exports.index_get = asyncHandler(async (req, res, next) => {
    res.render('index', { title: 'The Dragon Emporium' })
});

exports.eggs_get = asyncHandler(async (req, res, next) => {
    res.render('eggs', { title: 'Eggs' })
});

exports.young_get = asyncHandler(async (req, res, next) => {
    res.render('young', { title: 'Young' })
});

exports.adolescent_get = asyncHandler(async (req, res, next) => {
    res.render('adolescent', { title: 'Adolescent' })
});

exports.adults_get = asyncHandler(async (req, res, next) => {
    res.render('adults', { title: 'Adults' })
});