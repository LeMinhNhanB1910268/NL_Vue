const promotionController = require("../controllers/promotionController");

const router = require("express").Router();

router.post("/",promotionController.addPromotion);
router.get("/",promotionController.getAllPromotion);

router.get("/:id",promotionController.getPromotion);

router.put("/:id",promotionController.updatePromotion);

router.delete("/:id", promotionController.deletePromotion);


module.exports = router;