const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
 text:{
   type: String,
   trim: true,
   required: [true, 'Please add some text']
 },
 amount: {
   type: Number,
   required: [true,'Please add the amount']
 },
  createdType: {
   type: Date,
   default: Date.now
  }
})

module.exports = mongoose.model('TransactionSchema',transactionSchema)