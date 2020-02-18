import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './DatePickerComponent.css';

const DatePickerComponent = () => {
  const [birthdate, setBirthdate] = useState(new Date());
  const handleChange = date => {
    setBirthdate(date);
  };
  return (
    <DatePicker
      selected={birthdate}
      onChange={date => handleChange(date)}
      dateFormat="yyyy/MM/dd"
      popperPlacement="center"
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
    />
  );
};

export default DatePickerComponent;
