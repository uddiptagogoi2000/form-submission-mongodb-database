const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['leave', 'withdraw', 'internship'],
  },
  message: {
    type: String,
    required: true
  }
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form;