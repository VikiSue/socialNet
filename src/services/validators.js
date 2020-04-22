import moment from "moment";

export const required = value => (value ? undefined : "The field is required");

export const minLength = min => value =>
  value && value.length > min ? undefined : `Must be ${min} characters or more`;

export const isRegExEmail = value =>
  value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim())
    ? undefined
    : "Invalid email address";

export const isRegExPhone = value =>
  value && /^\+?3?8?(0\d{9})$/.test(value.trim())
    ? undefined
    : "Invalid phone number";

export const maxDate = value =>
  value &&
  value <
    moment()
      .subtract(7, "year")
      .format("YYYY-MM-DD")
    ? undefined
    : `You are too young`;



export const minDate = value =>
    value &&
    value >
    moment()
        .subtract(102, "year")
        .format("YYYY-MM-DD")
        ? undefined
        : `Your date is wrong`;
