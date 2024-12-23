const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["Technology", "Travel", "Food", "Fashion", "Health", "Sports", "Entertainment"],
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;