import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        setError("Error fetching blogs");
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/blog/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      setToastMessage("Blog deleted successfully!");
      setShowToast(true);
    } catch (err) {
      console.error("Error deleting blog", err);
      setToastMessage("Error deleting blog");
      setShowToast(true);
    }
  };

  return (
    <div>
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} className="bg-dark" autohide>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="blog-post2 mt-4">
        <div className="container">
          <div className="row g-4 mb-4 mt-4">
            <div className="col-12">
              <div className="spot-light-btn mb-4 text-center">
                <h1>BLOGS</h1>
              </div>
              <div className="row">
                {blogs.length === 0 ? (
                  <div className="h-250 d-flex justify-content-center align-items-center">
                    <h3 className="text-center">No blogs available.</h3>
                  </div>
                ) : (
                  blogs.map((blog) => (
                    <div key={blog._id} className="col-md-6 col-lg-4">
                      <Link to={`/blog/${blog._id}`} className="text-decoration-none">
                        <div className="card shadow-lg border-0 h-100 rounded-3 hover-card">
                          <img
                            src={`http://localhost:8000/${blog.image}`}
                            alt={blog.title}
                            ref={fileInputRef}
                            className="card-img-top rounded-top"
                            style={{ objectFit: "cover", height: "200px" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title text-primary">{blog.title}</h5>
                            <h6 className="text-muted">{blog.category}</h6>
                            <p className="text-muted small">
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </p>
                            <p className="card-text text-muted">
                              {blog.description.slice(0, 100)}...
                            </p>
                          </div>
                          <div className="card-footer d-flex justify-content-between bg-white border-0">
                            <Link to={`/edit/${blog._id}`} className="btn btn-outline-primary btn-sm">
                              <i className="fa-regular fa-pen-to-square"></i> Edit
                            </Link>
                            <div>

                              <button
                                className="btn btn-outline-danger btn-sm me-2"
                                onClick={(e) => {
                                  e.preventDefault(); // Prevent card navigation
                                  deleteBlog(blog._id);
                                }}
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for hover effect */}
      <style jsx>{`
        .hover-card:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Home;
