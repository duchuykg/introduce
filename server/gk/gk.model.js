const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gkSchema = new Schema(
  {
    date: {
        start_date: String,
    },
    type: [
      {
        type: String,
        enum: ["Post", "Paper", "Page"],
      },
    ],
    slug: String,
    tags: [String],
    category: [String],
    summary: String,
    level: String,
    author: [
      {
        id: String,
        name: String,
        profile_photo: String,
      },
    ],
    title: {
      type: String  
    },
    status: [
      {
        type: String,
        enum: ["Private", "Public", "PublicOnDetail"],
      },
    ],
    createdTime: String,
    fullWidth: Boolean,
    thumbnail: String,
    certificate: String,
  },
  {
    collection: "gks",
  }
);

const gk = mongoose.model("gks", gkSchema);

module.exports = gk;
