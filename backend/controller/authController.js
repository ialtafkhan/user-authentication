const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const user = require("../modal/userModal")


exports.login = async (req, res) => {


    try {
        let { email, password } = req.body;
        const result = await user.findOne({ email })
        if (!result) {
            return res.status(401).json({
                success: false,
                message: "email not found"
            })
        }

        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({
                success: false,
                message: "password not found"
            })
        }


        const token = jwt.sign({ id: result._id }, process.env.JWT)
        return res.status(200).json({
            suucess: true,
            message: "user login",
            result: {
                token,
                name: result.name,
                email: result.email
            }
        })


    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "error" + error
        })

    }

}


