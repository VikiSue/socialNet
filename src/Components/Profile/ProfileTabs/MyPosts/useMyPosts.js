import React, { useCallback, useState } from "react";

export const useMyPosts = () => {
  const [text, setText] = useState("");

  const handleChange = useCallback(
    e => {
      let post = e.target.value;
      setText(post);
    },
    [text]
  );

    const handleAdd = useCallback(
        () => {

            setText("");
        },
        []
    );


    return { handleChange, text, handleAdd };
};
