require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const questRoutes = require("./routes/question");

//  Middleware to create web server

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: false }));
const port = Number(process.env.PORT) || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

// Database Connection
connection();
// Routes

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/question", questRoutes);
