const mongose = require("mongoose");

const subCategorySchema  = new mongose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: [true, "SubCategory name must be unique"],
      minlength: [3, "SubCategory name must be at least 3 characters long"],
      maxlength: [32, "SubCategory name must be at most 32 characters long"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongose.model("SubCategory", subCategorySchema);
