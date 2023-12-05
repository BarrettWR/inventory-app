const asyncHandler = require("express-async-handler");
let mongoose = require('mongoose')
const dragonModel = require('../models/dragon');


exports.dragon_get = asyncHandler(async (req, res, next) => {
    let dragon = await dragonModel.findOne({_id: req.params.id});

    res.render('dragon', { title: 'Dragon', dragon: dragon })
});


// how to select the dragon by id from the url? or from the pug file?
exports.dragon_post = asyncHandler(async (req, res, next) => {
  console.log(req.body.id)

  // await dragonModel.deleteOne({_id: req.body.id});
  res.redirect("/");
});


