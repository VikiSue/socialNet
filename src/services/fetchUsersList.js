export const fetchUsersList = (seeds) => {
 return fetch(`https://randomuser.me/api??page=1&results=10&seed=${seeds}&inc=name,picture,email,cell,location`)
    .then(response => response.json())

};
