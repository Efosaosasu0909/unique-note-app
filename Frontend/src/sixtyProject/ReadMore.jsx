import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children, maxCharacterCount = 150 }) => {
  const [isTruncated] = useState(true);
  const text = children;
  const resultString = isTruncated ? text?.slice(0, maxCharacterCount) : text;
  return (
    <div>
      <p>{resultString}...</p>
    </div>
  );
};

export default ReadMore;
