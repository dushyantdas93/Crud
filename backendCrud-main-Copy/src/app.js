const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.route")

const app = express();
app.use(express.json());


app.get("/user", (req, res) => {
  res.json({
    name: "tiger",
    age: 21,
  });
});

app.use("/api/v1",userRoute);

// error middelware
// app.use(errorMiddleware);
module.exports = app;