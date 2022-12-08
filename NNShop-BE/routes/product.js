const productController = require("../controllers/productController");
var multer = require("multer");
let fs = require('fs');

const router = require("express").Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".");
    const newExt = ext[ext.length - 1];
    cb(null, `${Date.now()}.${newExt}`);
  },
});

const upload = multer({ storage: storage });
// const router = require("express").Router();

router.post("/",upload.single("imageUrl"),productController.addProduct);
router.get("/",productController.getAllProduct);

router.get("/:id",productController.getProduct);


router.put("/:id",upload.single("imageUrl"),productController.updateProduct);

router.delete("/:id", productController.deleteProduct);
// router.get("/hihi",productController.getImage);

router.get ("/open", productController.getAllProduct
  // let imageName = "uploads/" + req.query.image_Name;
  // console.log(imageName);
  // fs.readFile(imageName, (err, imageData) =>{
  //   if (err) {
  //     res.json({
  //       result: "failed",
  //       messege: `cannot: ${err}`
  //     })
  //   }
  //   res.writeHead(200, {'Content-Type': 'image/*'});
  //   res.end(imgageData)
  // })
);
module.exports = router;