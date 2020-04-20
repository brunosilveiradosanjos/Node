const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

/***********************************  
****************POST****************
************************************/

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

/***********************************  
*****************GET****************
************************************/

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

/***********************************  
**************GET by ID*************
************************************/

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.send(e)
    }
})

/***********************************  
*************PATCH by ID************
************************************/

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const alloewdUpdates = ['completed', 'description']
    const isValidOperation = updates.every((update) => alloewdUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

/***********************************  
************DELETE by ID************
************************************/

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router