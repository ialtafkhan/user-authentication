const express = require("express")
const cors = require("cors")
require("colors")
require("dotenv").config({ path: "./config/.env" })
const db = require("./config/db")
const userRoute = require("./route/userRoute")


db()

const app = express()


app.use(express.static("public"))

app.use(cors())
app.use(express.json())

app.use("/api/user", userRoute)
app.listen(process.env.PORT || 4000, () => console.log(`server running on port http://localhost:${process.env.PORT || 4000} `.bgBlue))

