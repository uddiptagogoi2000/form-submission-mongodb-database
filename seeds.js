const mongoose = require('mongoose')

const Form = require('./models/form')

mongoose.connect('mongodb://localhost:27017/formApp')
  .then(() => {
    console.log('CONNECTION OPEN!')
  })
  .catch(err => {
    console.log('OH NO ERROR!')
    console.log(err)
  })

/*
const foo = new Form({
firstName: 'John',
lastName: 'Doe',
category: 'leave',
message: 'Nice to meet you!'
})

foo.save()
.then(foo => {
  console.log(foo)
})
.catch(e => {
  console.log(e)
})
*/

const seedForms = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    category: 'internship',
    message: 'Went for summer internships in Bangalore'
  },
  {
    firstName: 'Tom',
    lastName: 'Bekker',
    category: 'withdraw',
    message: 'Withdrawn of Open elective course - Quantum Computing'
  },
  {
    firstName: 'Jenny',
    lastName: 'Bekker',
    category: 'leave',
    message: 'Suffering from illness'
  },
  {
    firstName: 'Henry',
    lastName: 'Smith',
    category: 'withdraw',
    message: 'Withdrawn of Open elective course - German'
  }
]

Form.insertMany(seedForms)
  .then(result => {
    console.log(result)
  })
  .catch(e => {
    console.log(e)
  })