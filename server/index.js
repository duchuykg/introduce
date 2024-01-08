const app = require("express")();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const http = require("http").createServer(app);
// const cors = require("cors");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// require("dotenv").config();

const mongoDB_url =
  "mongodb+srv://huypham2002khmt:duchuykg@cluster0.mftlzrt.mongodb.net/  ";
mongoose
  .connect(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

http.listen(4000, function () {
  console.log("listening on port 4000");
  // const getText = test.pdfToText('./uploads/hello.pdf');
});

// app.use(cors());
