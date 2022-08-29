import React from "react";
import "./MyBlog.css";
import "../../App.css";

function MyBlogs() {
  return (
    <div className="my-blog-section">
      <div className="my-blog-title">Blogs</div>
      <div className="animated-line" />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img
              src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
              alt="rover"
            />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Cat 1</span>
            <h4>What is yoga? and what is the advantage of it?</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ut
              minima exercitationem aspernatur{" "}
            </p>
          </div>
          <button className="my-blog-button">Read More</button>
        </div>

        <div className="card">
          <div className="card-header">
            <img
              src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
              alt="rover"
            />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">Cat 2</span>
            <h4>What is yoga? and what is the advantage of it?</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ut
              minima exercitationem aspernatur{" "}
            </p>
          </div>
          <button className="my-blog-button">Read More</button>
        </div>

        <div className="card">
          <div className="card-header">
            <img
              src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
              alt="rover"
            />
          </div>
          <div className="card-body">
            <span className="tag tag-purple">Cat 3</span>
            <h4>What is yoga? and what is the advantage of it?</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ut
              minima exercitationem aspernatur{" "}
            </p>
          </div>
          <button className="my-blog-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;
