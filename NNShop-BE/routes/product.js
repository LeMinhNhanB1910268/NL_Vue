const productController = require("../controllers/productController");

const router = require("express").Router();

router.post("/",productController.addProduct);
router.get("/",productController.getAllProduct);

router.get("/:id",productController.getProduct);


router.put("/:id",productController.updateProduct);

router.delete("/:id", productController.deleteProduct);


module.exports = router;