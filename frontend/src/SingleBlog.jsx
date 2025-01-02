import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const SingleBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the blog data by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://blog-app-backend-sigma.vercel.app/api/blog/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }
  return (
    <>
      <div className="blog-post-9 pt-20">
        <div className="container">
          <div className="inner-page-breadcrumb-wrapper mb-20">
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li><a href="#">Gaming</a></li> */}
              <li>{blog.title}</li>
            </ul>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-12">
              <div className="post-thump text-center">
                <a href="">  <img src={`https://blog-app-backend-sigma.vercel.app/${blog.image}`} alt={blog.title} height={500} width={500} /></a>
              </div>
              <ul className="post-meta">
                <li>
                  <a href="#">{blog.name}</a>
                </li>
                <li>
                  <a className="publish-date" href="#">{new Date(blog.createdAt).toLocaleDateString()}</a>
                </li>
              </ul>
              <h1>{blog.title}</h1>
              <div className="row justify-content-center">
                <div className="col-lg-10 mb-60">
                  <div className="blog-content">
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>

              <div className="blog-tag">
                <div className="author-name">
                  <h6>Posted by <a href="#">{blog.name}</a></h6>
                </div>
                <div className="tag-items">
                  <h6>Categorized:</h6>
                  <ul className="p-0 m-0">
                    <li><a href="#">{blog.category}</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default SingleBlog