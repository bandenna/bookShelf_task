const Customer = require('./modles/employee')
const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())

// post details
app.post('/employees', async (req, res) => {
    const { name, age, salary } = req.body
    const response = await Customer.forge({ name: name, age: age, salary: salary }).save()
    res.send(response)
})

// get Details
app.get('/employ', async (req, res) => {
    const customers = await new Customer().fetchAll()
    res.send(customers)
})

// get specific details
app.get('/employ/:id', async (req, res) => {
    const { id } = req.params
    const customer = await Customer.where("id", id).fetch()
    res.send(customer)
})

// update details
app.put('/employUpdate/:id', async (req, res) => {
    const { name } = req.params
    await Customer.where('name', name).save(
        { ...req.body },
        { patch: true }
    );
    res.send("details updated!!")
})

// Delete details
app.delete('/employDelete/:id', async (req, res) => {
    const { id } = req.params
    await Customer.where('id', id).destroy()
    res.send('details deleted successfully')
})
app.listen(3012, () => {
    console.log('server running on port 3012..')
})