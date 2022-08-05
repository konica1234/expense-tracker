const TransactionSchema = require('../models/modelTransaction')

exports.getTransaction = async (req,res,next) => {
 try{
  const findTransactions = await TransactionSchema.find()
  return res.status(200).json
  ({ success: true, count: findTransactions.length, data: findTransactions })
 }
 catch(err){
   res.send(500).json({success:false})
 }
}

exports.addTransaction = async (req,res,next) => {
 try{

 const {text,amount} = req.body
 const createTransaction = await TransactionSchema.create(req.body)
 console.log(req.body)
 return res.status(200).json
 ({success:true, data: createTransaction})
 }
 catch(err){
  if (err.name === 'ValidationError'){
    const messages = Object.values(err.errors).map(val => val.message)

    return res.status(400).json({success:false, error: messages})
  }
  else{
   return res.status(500).json({success:false,error: 'Server Error'})
  }
 }
}

exports.deleteTransaction = async (req,res,next) => {
 try{
  const findDeleteTransactions = await TransactionSchema.findById(req.params.id)
  if(!findDeleteTransactions) {
    return res.status(400).json({success:false , error: "transaction not found"})
  }
  else{
  const DeleteTransaction = await findDeleteTransactions.delete()
  return res.status(200).json
  ({success:true,data: DeleteTransaction})
  }}
  catch(err){
   console.log(err)
   return res.status(500).json({success:false, error:"Server Error"})
}
}