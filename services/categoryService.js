const asyncHandler = require("express-async-handler");
const CategoryModel = require("../models/categoryModel");
const SubCategoryModel = require("../models/subCategoryModel");
const slugify = require("slugify");
const ApiError = require("../utils/apiError");

// @desc    Get list of categories
// @route   GET  /api/v1/categories
// @access  Public
exports.getCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit; // (2-1)*5 = 5   So we are skipping the first 5 items
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).send({ data: categories, length: categories.length, page });
});

// @desc    Get category by id
// @route   POST  /api/v1/categories/:id
// @access  Private
exports.getCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  res.status(200).json({ data: category });
});

// @desc    Create category
// @route   POST  /api/v1/categories
// @access  Private
exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

// @desc    Update category by id
// @route   PUT  /api/v1/categories/:id
// @access  Private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name: name, slug: slugify(name) },
    { new: true },
  );
  res.status(200).json({ data: category });
});

// @desc    Delete category by id
// @route   DELETE  /api/v1/categories/:id
// @access  Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoryModel.findByIdAndDelete(id);
  const newCategories = await CategoryModel.find({});
  res
    .status(200)
    .json({ msg: "The item has been deleted", data: newCategories });
});
