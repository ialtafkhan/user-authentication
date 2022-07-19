const user = require("../modal/userModal")
const bcrypt = require("bcryptjs")



exports.adduser = async (req, res) => {

    try {
        let { password } = req.body
        // password =await bcrypt.hash(password,bcrypt.genSaltSync(10)) alternate way
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(password, salt)
        const result = await user.create(req.body)
        res.status(201).json({
            success: true,
            message: "user created  successfully",
            result

        })
        console.log(result);


    } catch (error) {
        res.status(400).json({
            success: false,
            message: "smothing wrong"

        })

    }

}

exports.getAllUser = async (req, res) => {
    try {

        const result = await user.find()
        res.status(201).json({
            count: result.length,
            success: true,
            message: "user get successfully",
            result
        })


    } catch (error) {
        res.status(400).json({
            success: false,
            message: "somthing wrong",

        })


    }

}
exports.deleteAllUser = async (req, res) => {
    try {

        const result = await user.deleteMany()
        res.status(201).json({
            count: result.length,
            success: true,
            message: "user deletd successfully",
            result
        })


    } catch (error) {
        es.status(400).json({
            success: false,
            message: "somthing wrong",

        })


    }

}

