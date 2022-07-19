
const express = require("express")
const { login } = require("../controller/authController")
const { getAllUser, deleteAllUser, adduser } = require("../controller/userController")
const { upload } = require("../middleware/upload")


const router = express.Router()

router.route("/signup").post(upload.single("image"), adduser)

router.route("/login").post(login)

router.route("/").get(getAllUser)
router.route("/").delete(deleteAllUser)

module.exports = router
