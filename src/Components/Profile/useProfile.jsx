import React, { useState } from "react";

export const useProfile = () => {
  const [text, setText] = useState("");

  const handleChange = e => {
    let status = e.target.value;
    setText(status);
  };


  return { text, handleChange };
};
