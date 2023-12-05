const asyncHandler = require("express-async-handler");
let mongoose = require('mongoose')
const dragonModel = require('../models/dragon');
const Dragon = require("../models/dragon");

// trim the list of dragons for each category + the index page
let dragons = async () => await dragonModel.find();

async function getCategory(age, count, dragonsData) {
    let list= [];
    for (let dragon of dragonsData) {
        if (list.length >= count) { 
            return list 
        };

        if (dragon.category == age) {
            list.push(dragon);
        }
    }
    return list;
}


exports.index_get = asyncHandler(async (req, res, next) => {
    let dragonsData = await dragons();
    let eggs = await getCategory("Egg", 3, dragonsData);
    let young = await getCategory("Young", 3, dragonsData);
    let adolescent = await getCategory("Adolescent", 3, dragonsData);
    let adult = await getCategory("Adult", 3, dragonsData);
    
    res.render('index', { 
        title: 'The Dragon Emporium', 
        eggs: eggs, 
        young: young, 
        adolescent: adolescent, 
        adult: adult
    })
});

exports.eggs_get = asyncHandler(async (req, res, next) => {
    let dragonsData = await dragons();
    let eggs = await getCategory("Egg", 10, dragonsData);

    res.render('eggs', { 
        title: 'Eggs', 
        eggs: eggs
    })
});

exports.young_get = asyncHandler(async (req, res, next) => {
    let dragonsData = await dragons();
    let young = await getCategory("Young", 10, dragonsData);

    res.render('young', { 
        title: 'Young', 
        young: young
    })
});

exports.adolescent_get = asyncHandler(async (req, res, next) => {
    let dragonsData = await dragons();
    let adolescent = await getCategory("Adolescent", 10, dragonsData);

    res.render('adolescent', { 
        title: 'Adolescent', 
        adolescent: adolescent
    })
});

exports.adults_get = asyncHandler(async (req, res, next) => {
    let dragonsData = await dragons();
    let adults = await getCategory("Adult", 10, dragonsData);

    res.render('adults', { 
        title: 'Adults', 
        adults: adults
    })
});

exports.newdragon_get = asyncHandler(async (req, res, next) => {
    res.render('newdragon', { title: 'New Dragon' })
});
const { check, validationResult } = require('express-validator');

exports.newdragon_post = [
  check('name').trim().escape(),
  check('price').isNumeric().trim().escape(),
  check('description').trim().escape(),
  check('category').trim().escape(),
  check('url').isURL().trim(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Handle errors here
      console.log(errors.array());
      return res.redirect('/newdragon');
    }
    try {
      const dragon = new Dragon({
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description, 
        category: req.body.category,
        url: req.body.url
      })
      await dragon.save()
      res.redirect(`/dragon/${dragon._id}`)
    }
    catch (err) {
        console.log(err)
        res.redirect('/newdragon')
    }
  })
];
