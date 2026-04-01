const express = require("express");
const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");
const router = express.Router();

/************************************
 * GET
 ************************************/
router.get("/", getCategories); //router.route("/").get(getCategories)
router.get("/:id", getCategory); //router.route(/:id).get(getCategory)

/************************************
 * POST
 ************************************/
router.post("/", createCategory); //router.route("/").post(createCategory)

/************************************
 * PUT
 ************************************/
router.put("/:id", updateCategory); //router.route(/:id).put(updateCategory)

/************************************
 * DELETE
 ************************************/
router.delete("/:id", deleteCategory); //router.route(/:id).delete(deleteCategory)

/************************************
 *
 * SUMMARY
 *
 ************************************/
// router.route("/").get(getCategories).post(createCategory);
// router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;
