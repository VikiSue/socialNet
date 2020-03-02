
export const fetchUsersList = seeds => {
  return fetch(
    `https://randomuser.me/api?page=1&results=10&seed=${seeds}&inc=name,picture,email,cell,dob,location&`
  )
    .then(response => response.json())
    .then(response => {
      return response.results.map(item => ({
        ...item,
        id: (Math.floor(Math.random() * (99999 - 1)) + 1)
      }));
    });
};
