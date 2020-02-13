import React, { useCallback, useState } from "react";

export const useUsersList = list => {
  const [selectedUser, setSelectedUser] = useState({});

  const handleSelect = useCallback(
    id => {
      let newList = {};
      newList = list.filter(item => item.cell === id);
      setSelectedUser({
        name: `${newList[0].name.first}  ${newList[0].name.last}`,
        location: `${newList[0].location.country},  ${newList[0].location.city}`,
        cell: `${newList[0].cell}`,
        email: `${newList[0].email}`,
        picture: `${newList[0].picture.large}`
      });
    },
    [selectedUser]
  );

  const handleHide = useCallback(() => {
    setSelectedUser({});
  }, [selectedUser]);

  return { handleSelect, selectedUser, handleHide };
};
