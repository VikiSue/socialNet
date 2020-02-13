import { GET_SELECTED_USER } from "./../types/types";

export const getSelectedUser = (list, id) => {
  let newList = {};
  newList = list.filter(item => item.cell === id);
  return { type: GET_SELECTED_USER, payload: {
      name: `${newList[0].name.first}  ${newList[0].name.last}`,
      location: `${newList[0].location.country},  ${newList[0].location.city}`,
      cell: `${newList[0].cell}`,
      email: `${newList[0].email}`,
      picture: `${newList[0].picture.large}`
    } };
};
