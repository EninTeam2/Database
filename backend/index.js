const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// To Create Table One Time
// const db = require("./models");
// db.sequelize.sync().then(() => {
//   initial();
//   console.log("table create is success");
// });


app.listen(3000, () => {
  console.log("connected....");
});
