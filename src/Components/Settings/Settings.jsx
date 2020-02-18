import React, { useState } from "react";
import DatePickerComponent from "../DatePicker/DatePickerComponent";

const Settings = () => {
  return (
    <div>
      <div className="settings">
        <h5 className="settings__title">Edit Profile</h5>

        <div className="settings__body">
          <form className="editForm">
            <div className="editForm__group">
              <label>Username</label>
              <input
                type="text"
                className="editForm__input"
                value="michael23"
              />
            </div>
            <div className="editForm__group">
              <label>Email address</label>
              <input
                type="email"
                className="editForm__input"
                placeholder="mike@email.com"
              />
            </div>
            <div className="editForm__group">
              <label>First Name</label>
              <input type="text" className="editForm__input" value="Mike" />
            </div>

            <div className="editForm__group">
              <label>Last Name</label>
              <input type="text" className="editForm__input" value="Andrew" />
            </div>
            <div className="editForm__group">
              <label>Date of birth</label>
              <DatePickerComponent />
            </div>
            <div className="editForm__group">
              <label>City</label>
              <input type="text" className="editForm__input" value="Mike" />
            </div>
            <div className="editForm__group">
              <label>Country</label>
              <input type="text" className="editForm__input" value="Andrew" />
            </div>

            <div className="editForm__group">
              <label>About Me</label>
              <textarea rows="4" cols="80" className="editForm__input">
                Lamborghini Mercy, Your chick she so thirsty, I'm in that two
                seat Lambo.
              </textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Settings;
