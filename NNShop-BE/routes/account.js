const accountController = require("../controllers/accountController");

const router = require("express").Router();

router.post("/",accountController.addAccount);
router.get("/",accountController.getAllAccount);

router.get("/:id",accountController.getAccount);

router.put("/:id",accountController.updateAccount);

router.delete("/:id", accountController.deleteAccount);


module.exports = router;