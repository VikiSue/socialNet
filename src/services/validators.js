export const required = value => (value ? undefined : "The field is required");

export const minLength = min => value =>
  value && value.length > min ? undefined : `Must be ${min} characters or more`;

export const isRegEx = value =>
  value && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(value)
    ? undefined
    : "Invalid email address";
