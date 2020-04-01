
export const fetchUsersList = (page= 1, follow= true) => {
  return fetch(
    `https://randomuser.me/api?results=30&page=${page}&seed=abc&inc=name,picture,email,cell,dob,location`
  )
    .then(response => response.json())
    .then(response => {
      return response.results.map(item => ({
        ...item,
        id: (Math.floor(Math.random() * (99999 - 1)) + 1) + (Math.floor(Math.random() * (999 - 1)) + 1),
          follow: follow,
          online: Math.random() > 0.5,
      }));
    });
};
