import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // To get blog ID and navigate back

const EditBlog = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      title: "",
      name: "",
      category: "", 
      description: "",
      image: null,
  });

  const [existingImage, setExistingImage] = useState(""); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchBlog = async () => {
        try {
            const response = await axios.get(`https://blog-app-backend-sigma.vercel.app/api/blog/${id}`);
            const { title, name, category, description, image } = response.data;
            setFormData({ title, name, category, description, image: null });
            setExistingImage(image);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching blog data", err);
        }
    };

    fetchBlog();
}, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("id", id);
    data.append("title", formData.title);
    data.append("name", formData.name);
    data.append("category", formData.category); 
    data.append("description", formData.description);
  
    // If a new image is selected, append it to the form data
    if (formData.image) {
        data.append("image", formData.image);
    }
    try {
      const response = await axios.put(`https://blog-app-backend-sigma.vercel.app/api/blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // If successful, handle the response, e.g., navigate or show a success message
      console.log(response.data);
      // Redirect to the home page or show a success message
      navigate("/");
    } catch (err) {
      console.error("Error updating blog", err);
    }
  };
  

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator until data is fetched
  }

  return (
    <div className="blog-post-10 pt-20 mb-120">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-12">
            <div className="inquiry-form contact-inquiry">
              <div className="title">
                <h1 className="text-center">Edit Blog</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-inner mb-20">
                      <label>Blog Title* :</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label>Blogger Name* :</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-20">
                      <label>Blog Category* :</label>
                      <select
                        className="p-2 own"
                        name="category"
                        value={formData.category} // Pre-select the category
                        onChange={handleChange}
                        required
                      >
                        <option className="my-select" value={formData.category}>
                          {formData.category}
                        </option>
                        <option className="my-select" value="technology">Technology</option>
                        <option className="my-select" value="travel">Travel</option>
                        <option className="my-select" value="food">Food</option>
                        <option className="my-select" value="fashion">Fashion</option>
                        <option className="my-select" value="health">Health</option>
                        <option className="my-select" value="sports">Sports</option>
                        <option className="my-select" value="entertainment">Entertainment</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-20">
                      <label>Blog Image* :</label>
                      {existingImage && (
                        <div>
                          <img
                            src={`http://localhost:8000/${existingImage}`}
                            alt="Blog"
                            width="100"
                            height="100"
                          />
                        </div>
                      )}
                      <input type="file" name="blogimage" onChange={handleFileChange} />
                    </div>
                  </div>  
                  <div className="col-md-12">
                    <div className="form-inner mb-15">
                      <label>Description </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Write Something..."
                      />
                    </div>
                  </div>
                </div>
                <div className="form-inner">
                  <button className="primary-btn1 contact-btn" type="submit">
                    <span> <svg className="arrow" width="10" height="10" viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        stroke="#191919" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                      Update Blog</span>
                  </button>
                </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
