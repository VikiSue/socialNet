import React, { useState } from "react";

export const useProfile = () => {
  const [text, setText] = useState('');
  console.log("TEXT", text);
  const handleChange = e => {
    let status = e.target.value;
    setText(status);
  };

  return { text, handleChange };
};
