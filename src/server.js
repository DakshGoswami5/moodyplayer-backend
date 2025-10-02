require("dotenv").config();

const app = require("./app");
const connectDB = require("./db/db")

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server is running on port 3000");
})