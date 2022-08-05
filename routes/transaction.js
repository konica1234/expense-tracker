const express = require('express');
const router = express.Router();
const {getTransaction,deleteTransaction,addTransaction} = require('../controller/transactionController')

router
   .route('/')
   .get(getTransaction)
   .post(addTransaction)
router
    .route('/:id')
    .delete(deleteTransaction)

module.exports = router;