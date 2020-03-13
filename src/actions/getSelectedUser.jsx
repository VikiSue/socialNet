import { GET_SELECTED_USER } from "./../types/types";

export const getSelectedUser = (list, id) => {
  let newList = [];
  let t = [...list];
  newList = t.filter(item => item.id === id);
  return {
    type: GET_SELECTED_USER,
    payload: {
      name: `${newList[0].name.first}  ${newList[0].name.last}`,
      location: `${newList[0].location.country},  ${newList[0].location.city}`,
      cell: `${newList[0].cell}`,
      email: `${newList[0].email}`,
      picture: `${newList[0].picture.large}`,
      date: `${newList[0].dob.date.slice(0, 10)}`,
      age: `${newList[0].dob.age}`,
      follow: `${newList[0].follow}`,
      online: `${newList[0].online}`
    }
  };
};
