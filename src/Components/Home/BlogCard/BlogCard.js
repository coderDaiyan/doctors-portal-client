import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const { name, title, date, description } = blog;
  return (
    <div className="blog__card">
      <h5>{name}</h5>
      <p className="text-secondary">{date}</p>
      <h4 className="fw-bold">{title}</h4>
      <br />
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
