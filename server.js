const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const transaction = require('./routes/transaction')
const connectDB = require('./config/db.js')

dotenv.config({path: './config/config.env'})

connectDB();

const app = express();

app.use(express.json())
//app.get('/',(req,res) => res.send("Hello"))
app.use('/api',transaction)

if(process.env.NODE_ENV === 'production'){
    app.use("/", express.static("client/build"))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "/client/build/index.html"))
    })
}


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
