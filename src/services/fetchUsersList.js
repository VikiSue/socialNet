
export const fetchUsersList = page => {
  return fetch(
    `https://randomuser.me/api?results=30&page=${page}&seed=abc&inc=name,picture,email,cell,dob,location`
  )
    .then(response => response.json())
    .then(response => {
      return response.results.map(item => ({
        ...item,
        id: (Math.floor(Math.random() * (99999 - 1)) + 1),
          follow: Math.random() > 0.7,
          online: Math.random() > 0.5,
      }));
    });
};
