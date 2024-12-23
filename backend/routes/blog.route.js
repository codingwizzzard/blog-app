const { Router } = require("express");
const upload = require("../middlewares/multer.js");
const { addBlog, getBlogs, getBlogById, deleteBlog } = require("../controllers/blog.controller.js");

const blogRoutes = Router();

blogRoutes.post("/add", upload.single("image"), addBlog);
blogRoutes.get("/blogs", getBlogs);
blogRoutes.get("/blog/:id", getBlogById);
blogRoutes.delete("/blog/:id", deleteBlog);
blogRoutes.put("/blog/:id", upload.single("image"), addBlog); // Reusing `addBlog` for editing

module.exports = blogRoutes;
