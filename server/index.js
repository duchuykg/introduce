const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const loginRouter = require("./login/login.router");
const gkRouter = require("./gk/gk.router");
const gkitemRouter = require("./gkitem/gkitem.router");

const http = require("http").createServer(app);
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const Multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
app.use(cors());

app.post("/upload", upload.single("my_file"), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();

const mongoDB_url = process.env.DATABASE_LINK;
mongoose
  .connect(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

http.listen(4000 || process.env.PORT, function () {
  console.log("listening on port 4000");
});

app.use("/gk", gkRouter);
app.use("/gkitem", gkitemRouter);
app.use("/login", loginRouter);
