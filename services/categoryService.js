const CategoryModel = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  // const name = req.body.name;
  // console.log("🚀 ~ name:", name);
  res.send(200);
};

exports.createCategory = (req, res) => {
  const name = req.body.name;
  CategoryModel.create({name,})
  // const newCategory = new CategoryModel({ name });
  // newCategory
  //   .save()
  //   .then((doc) => {
  //     res.json(doc);
  //   })
  //   .catch((err) => {
  //     console.log("Item error:", err);
  //   });
};
