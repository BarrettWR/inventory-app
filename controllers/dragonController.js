const asyncHandler = require("express-async-handler");
let mongoose = require('mongoose')


exports.dragon_get = asyncHandler(async (req, res, next) => {



    res.render('dragon', { title: 'Dragon', id: req.params.id })
});

