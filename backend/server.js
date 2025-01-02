const express = require("express");
const db = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")
const cors = require("cors");
const blogRoutes = require("./routes/blog.route.js");

const PORT = process.env.PORT;

app.use('*',cors({
    origin: "*",
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/uploads",express.static("uploads"))

app.use("/api",blogRoutes)

app.listen(PORT, () => {
    db()
    console.log(`Server is running on http://localhost:${PORT}`);
});