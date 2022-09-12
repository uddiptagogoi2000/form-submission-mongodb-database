const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')

const Form = require('./models/form');
const { formatWithOptions } = require('util');
const { findById } = require('./models/form');

mongoose.connect('mongodb://localhost:27017/formApp')
  .then(() => {
    console.log('CONNECTION OPEN!')
  })
  .catch(err => {
    console.log('OH NO ERROR!')
    console.log(err)
  })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/forms', async (req, res) => {
  const forms = await Form.find({})
  res.render('forms/index', { forms })
})

app.get('/forms/new', (req, res) => {
  res.render('forms/new')
})

app.post('/forms', async (req, res) => {
  const newForm = new Form(req.body)
  await newForm.save()
  res.redirect(`/forms/${newForm._id}`)
})

app.get('/forms/:id', async (req, res) => {
  const { id } = req.params
  const form = await Form.findById(id)
  res.render('forms/show', { form })
})

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000")
})