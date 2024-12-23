const Blog = require("../models/blog.schema.js");
const fs = require("fs")

// logic for add and edit blog  
exports.addBlog = async (req, res) => {
    const { title, description, name, category, id } = req.body;
    let image

    try {
        if (id) {
            const existingBlog = await Blog.findById(id);
            if (!existingBlog) {
                return res.status(404).json({ message: "Blog not found" });
            }
            if (req.file) {
                image = req.file.path
                let data = await Blog.findById(id)
                fs.unlinkSync(data.image)

                let updatedBlog = await Blog.findByIdAndUpdate(id, { title, description, name, category, image })

                res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog })
            } else {
                let data = await Blog.findById(id)
                image = data.image

                let updatedBlog = await Blog.findByIdAndUpdate(id, { title, description, name, category, image })

                res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog })
            }
        } else {
            image = req.file.path

            let newBlog = await Blog.create({ title, description, name, category, image })

            res.status(200).json({ message: "Blog added successfully", blog: newBlog })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// logic for get all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find(); // Fetch all blogs from MongoDB
        res.status(200).json(blogs); // Return the blogs as JSON
    } catch (err) {
        res.status(500).json({ message: "Error fetching blogs" });
    }
};

// logic for delete blog
exports.deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        // Find the blog by ID and delete it
        const deletedBlog = await Blog.findByIdAndDelete(blogId);
        fs.unlinkSync(deletedBlog.image)
        // If no blog is found, return 404 error
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Successfully deleted, return success message
        res.status(200).json({ message: "Blog deleted successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting blog" });
    }
};

// logic for get blog by id
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

