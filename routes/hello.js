const express = require('express');
const router = express.Router();
const helloModel = require('../models/helloModel');

    // Get all data
router.get('/', async (req, res) => {
    const datas = await helloModel.find()
    res.json( datas )
})

    // Add Data
router.post('/add', async (req, res) => {
    const newData = new helloModel(
        // req.body
        {
            id: 1,
            name: "Hello World",
        }
    );
    const savedData = await newData.save()
    res.json(savedData)
})

    // get by id
router.get('/:id/get', async (req, res) => {
    const id = await helloModel.findById({ _id : req.params.id })
    res.json(id)
})

    // delete data by id
router.delete('/:id/delete', async (req, res) => {
    const delData = await helloModel.findByIdAndDelete({ _id : req.params.id })
    res.json(delData)
})

    // delete data by id
router.put('/:id/update', async (req, res) => {
    const updData = await helloModel.updateOne(
        // {_id : req.params.id }, { $set : req.body }
        {
            id: 2,
            name: "Hello World Updated"
        }
     )
    res.json(updData)
})


module.exports = router