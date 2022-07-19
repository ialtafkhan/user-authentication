const path = require("path")
const multer = require("multer")



const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, "public/upload") },

    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const fn = "product-" + Date.now() + ext

        req.body.image = `upload/${fn}`
        cb(null, fn)
    }


})

exports.upload = multer({ storage })