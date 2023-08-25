import React from "react";

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <p className="tag-text">{getTag}</p>
    </div>
  );
};

export default Tags;
