const express = require("express");
require('dotenv').config()

const app = express();
const dbConfig = require("./config/dbConfig");

const port = process.env.PORT || 5000;

const usersRoute = require("./routes/usersRoute");
app.use("/api/users", usersRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
