const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gkitemSchema = new Schema(
  {
    idGk: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  {
    collection: "gkitems",
  }
);

const gkitem = mongoose.model("gkitems", gkitemSchema);

module.exports = gkitem;
