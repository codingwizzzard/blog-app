const multer = require("multer");
const path = require("path");

// Storage engine for uploaded files
const storage = multer.diskStorage({
    // Folder to store uploads
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  // Ensure unique filenames
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + path.extname(file.originalname)); 
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/webp" || file.mimetype === "image/avif") {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

// Set up multer for image uploads
const upload = multer({
  storage: storage,
  limits: {
    // Limit to 5MB
    fileSize: 1024 * 1024 * 5 
  },
  fileFilter: fileFilter
});

module.exports = upload;