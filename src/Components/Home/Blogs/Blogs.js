import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./Blogs.css";

const Blogs = () => {
  const blogData = [
    {
      name: "Rashed Kabir",
      date: "22 Aug 2018",
      title: "Check at Least a doctor in a year for your teeth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit laudantium unde molestias quaerat neque quidem. Velit possimus mollitia magni.",
    },
    {
      name: "Dr. Caudi",
      date: "23 April 2019",
      title: "2 times of Brush in a day can keep you healthy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit laudantium unde molestias quaerat neque quidem. Velit possimus mollitia magni.",
    },
    {
      name: "Dr. John Mitchel",
      date: "22 Aug 2018",
      title: "The tooth cancer is taking a challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit laudantium unde molestias quaerat neque quidem. Velit possimus mollitia magni.",
    },
  ];
  return (
    <section data-aos="zoom-out" className="blogs__section">
      <div className="text-center">
        <h5 style={{ color: "var(--text-color-green)" }}>OUR BLOG</h5>
        <h2 className="fw-bold" style={{ color: "var(--text-color-dark)" }}>
          From Our Blog News
        </h2>
      </div>
      <div className="row parent d-flex justify-content-center align-items-center">
        {blogData.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
