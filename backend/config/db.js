const mongoose = require("mongoose")
require("colors")



const db = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`conected to database`.bgGreen);



    } catch (error) {
        console.log(`error ${error}`.bgRed);
        process.exit()
    }
}

module.exports = db