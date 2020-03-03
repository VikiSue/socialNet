export const fetchPhotosList = seeds => {
  return fetch(
    `https://api.unsplash.com/search/photos/?client_id=p2wxOnX3cSZR6lhEWTdVvLTPkD8eb675oDOw606ROLw&query=trip`
  ).then(response => response.json());
};
