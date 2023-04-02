require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");



//  Middleware to create web server

app.use(express.json());
app.use(cors());

// Creating port for server
const port = Number(process.env.PORT) || 3001;
app.listen(port, ()=>console.log(`Server listening on ${port}`));

// Creating MongoDB Connection

connection();

// Routes

app.use('/api/signup', userRoutes);
app.use('/api/login', authRoutes);
app.use('/questions', questionRoutes);







