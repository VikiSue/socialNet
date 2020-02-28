import React, { useEffect } from "react";
import "../../scss/photo.scss";
import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/fetchPhoto";
import Loader from "../reusableComponents/Loader/Loader";

const PhotoList = props => {

  useEffect(() => {
    props.fetchPhoto();
  }, []);


console.log("PPP", props);
  return (
    <>
      <div className="photos">
        {props.isLoading ? <Loader/> : null}
        <ul className="photos__list">
          {props.photos.map(item => (
            <li key={item.id} className='photos__item'>
              <div className='photos__date'>Date: {item.created_at.slice(0, 10)}</div>
              <div className='photos__description'>{item.description}</div>
              <div className='photos__photo'>
                <img src={item.urls.regular} className='photos__img' alt={item.alt_description}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const PhotoListContainer = connect(
  state => ({
    isLoading: state.photos.isLoading,
    photos: state.photos.photos
  }),
  { fetchPhoto }
)(PhotoList);
export default PhotoListContainer;
