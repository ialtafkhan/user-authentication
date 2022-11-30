
const express = require("express")
const { login } = require("../controller/authController")
const { getAllUser, deleteAllUser, adduser, deletesingleUser, updateUser } = require("../controller/userController")
const { upload } = require("../middleware/upload")


const router = express.Router()

router.route("/signup").post(upload.single("image"), adduser)

router.route("/login").post(login)

router.route("/").get(getAllUser)
router.route("/").delete(deleteAllUser)
router.route("/delete/:id").delete(deletesingleUser)
router.route("/update/:id").put(updateUser)

module.exports = router
