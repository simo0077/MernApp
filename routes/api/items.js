const express = require('express');
const router = express.Router();

// Item model 
const Item = require('../../models/Items');

// @route Get api/items
// @desc Get all items
// @access Public
router.get('/', (req,res)=>{
    Item.find()
    .sort({date : -1})
    .then( items => res.json(items))
});

// @route POST api/items
// @descCreate a Post
// @access Public
router.post('/', (req,res)=>{
    const newItem = new Item({
        name : req.body.name
    });
    newItem.save().then( item => res.json(item))
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
        .then(item=> item.remove().then( () => res.json({sucess:true})))
        .catch(err=> res.status(404).json({sucess:false}))
});
module.exports = router;