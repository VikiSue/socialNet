import { ADD_NEW_POST, DELETE_MY_POST } from ".././types/types";

const initialValue = [
  {
    date: "2019-12-20",
    text:
      "I want someone who will look at me the same way I look at chocolate cake.",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa5xD8-9K-2iR8HavuRPauFOCAXaJ4b5UdHowAmwk_n9CfrIFe",
    id: 125
  },
  {
    date: "2019-12-30",
    text:
      "I am a better person because of you. You help me be the best person that I can be and you always encourage me to reach my full potential.",
    photo: "",
    id: 127
  },
  {
    date: "2019-12-31",
    text: "I had fun once, it was horrible.",
    photo: "https://i.gifer.com/fxiL.gif",
    id: 126
  },
  {
    date: "2020-02-20",
    text:
      "I have lots of hidden talents. The problem is, even I can’t find them.",
    photo: "",
    id: 128
  }
];

export const onNewPostAdding = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return [...state, { ...action.payload }];
    case DELETE_MY_POST:
      return {};
    default:
      return state;
  }
};
