---

# Blog Application

## 📝 Overview
The Blog Application is a web platform designed to help users create, manage, and view blog posts. It provides easy-to-use tools for both content creators and readers to engage with posts, leave comments, and more.

## 🌟 Features
- ✍️ **Blog Management**:
  - Create new blog posts with titles and content.
  - View and edit existing blog posts.
  - Delete posts.
- 📂 **Categories**:
  - Organize posts by categories.

## 💻 Technologies Used
- **Frontend**:
  - ⚛️ React.js
  - 🎨 Bootstrap 5
- **Routing**:
  - 🛣️ React Router DOM
- **State Management**:
  - 📊 React hooks
- **Backend**:
  - 🟢 Node.js
  - 🍃 MongoDB

## 🛠️ Installation

### Prerequisites
- 🛠️ Node.js (v14 or above)
- 📦 npm or yarn
- 🗄️ MongoDB Database

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/codingwizzzard/blog-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Set up environment variables:
   Create a `.env` file in the backend folder and add the following:
   ```env
   MONGO_URL=<your-mongodb-connection-string>
   PORT=5000
   ```
6. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

The application will be available at `http://localhost:3000`.

## 🚀 Usage

1. **📋 View Posts**:
   - Navigate to the "Blog Posts" section to view available posts.
2. **➕ Add Blog Posts**:
   - Use the "Add New Post" section to create new blog posts.
3. **✏️ Modify Posts**:
   - Edit your existing blog posts.

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Deployment Links : 
Backend : https://blog-app-backend-sigma.vercel.app

This structure mimics the one you had for the task management system but focuses on features relevant to a blog application. Let me know if you need further adjustments!
