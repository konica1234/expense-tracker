function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload : id
    })
  }

const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")

dotenv.config({path: './config/config.env'})

const app = express();

app.get('/',(req,res) => res.send('Hello'))

const PORT = process.env.NODE_ENV

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
