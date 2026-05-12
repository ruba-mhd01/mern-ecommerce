const router = require("express").Router();

const auth = require("../middleware/auth");

const {
  getWishlist,
  toggleWishlist,
  removeWishlist,
} = require("../controllers/wishlistController");


router.get("/", auth, getWishlist);
router.post("/", auth, toggleWishlist);
router.delete("/:id", auth, removeWishlist);


module.exports = router;