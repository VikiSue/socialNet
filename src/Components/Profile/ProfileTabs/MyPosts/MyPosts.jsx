import React from "react";
import { connect } from "react-redux";
import "../../../../scss/styles/_posts.scss";
import { addPost } from "../../../../Redux/actions/addPost";
import { useMyPosts } from "./useMyPosts";

const MyPosts = props => {
  const { handleChange, text, handleAdd } = useMyPosts();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.length > 3) {
      props.addPost(text);
      handleAdd();
    }
  };

  return (
    <div className="myPosts">
      <form className="myPosts__form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          maxLength="100"
          className="myPosts__textarea"
          onChange={handleChange}
          value={text}
        />
        <button type="submit" className="myPosts__btn btn">
          POST
        </button>
      </form>

      <ul className="myPosts__list">
        {props.posts.map(item => (
          <li key={item.id} className="myPosts__item">
            <div className="myPosts__date">{item.date}</div>
            <div className="myPosts__description">{item.text}</div>
            <div className={item.photo ? "myPosts__photo" : "hidden"}>
              <img src={item.photo} alt="photo" className="myPosts__img" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MyPostsContainer = connect(
  state => ({
    posts: state.posts
  }),
  { addPost }
)(MyPosts);

export default MyPostsContainer;
