import React, { useCallback, useEffect, useState } from "react";

export const useUsers = (fetchUsers, users, currentPage) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchText, setSeachText] = useState('');
  const [selectedUser, setSelectedUser] = useState('');


  const list = filteredUsers.length > 0 ? filteredUsers : users;

  useEffect(() => {
    fetchUsers(currentPage);
  }, []);

  const handleSearch = useCallback(
    e => {
      let text = e.target.value;
      setSeachText(text);
    },
    [searchText]
  );



  useEffect(() => {
    const filteredUsers = users.filter(
      item =>
        item.name.last.toLowerCase().includes(searchText.toLowerCase()) ||
        item.name.first.toLowerCase().includes(searchText.toLowerCase()) ||
        item.location.country
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        item.location.city.toLowerCase().includes(searchText.toLowerCase())
    );
    return setFilteredUsers(filteredUsers);
  }, [searchText]);

  return { handleSearch, list, searchText, filteredUsers };
};
