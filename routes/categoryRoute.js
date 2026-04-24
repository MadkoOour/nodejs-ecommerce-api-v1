const express = require("express");
const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");
const { param, validationResult } = require("express-validator");
const {
  getCategoryValidator,
  createCategoryValidator,
  deleteCategoryValidator,
  updateCategoryValidator,
} = require("../utils/vaildators/categoryVaildator");
const { deleteMany } = require("../models/categoryModel");
const router = express.Router();

/************************************
 * GET
 ************************************/
router.get("/", getCategories); //router.route("/").get(getCategories)
router.get("/:id", getCategoryValidator, getCategory); //router.route(/:id).get(getCategory)

/************************************
 * POST
 ************************************/
router.post("/", createCategoryValidator, createCategory); //router.route("/").post(createCategory)

/************************************
 * PUT
 ************************************/
router.put("/:id", updateCategoryValidator, updateCategory); //router.route(/:id).put(updateCategory)

/************************************
 * DELETE
 ************************************/
router.delete("/:id", deleteCategoryValidator, deleteCategory); //router.route(/:id).delete(deleteCategory)

/************************************
 *
 * SUMMARY
 *
 ************************************/
// router.route("/").get(getCategories).post(createCategory);
// router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;
