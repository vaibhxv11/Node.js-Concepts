const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();
const uploadMiddleware = require("../middleware/upload-middleware");
const { uploadImageController } = require("../controllers/image-controller");
// upload he image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

//to get all the images

// router.get("/get");

module.exports = router;
