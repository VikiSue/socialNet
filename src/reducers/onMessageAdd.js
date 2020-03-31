import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE
} from "../types/types";

const initialValue = {
  friendsMessages: [
    {
      from: "Anny Sitto",
      id: 1,
      online: Math.random() > 0.3,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRinY4vLmj_JVTSedukEYnvTIWLVZFvY__GWupSreUQEkVnNw2H",
      messages: [
        {
          date: "12:00/10/12/2019",
          text:
            "99 cups of coffee on the wall, 99 cups of coffee. Take one down. Pass it around, 98 cups of coffee on the wall..."
        },
        {
          date: "10:30/31/12/2019",
          text:
            "Laws of Physics: Hold up a piece of paper. I'll throw a rock. Who wins?"
        },
        {
          date: "11:20/10/02/2020/",
          text: "Political Lessons: If at first you don't succeed, cheat."
        },
        {
          date: "22:15/10/03/2020",
          text: "Frankly my dear, I don't give a duck."
        }
      ]
    },
    {
      from: "Mike Ferguson",
      id: 2,
      online: Math.random() > 0.3,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2mJ24saXepGdo00xQzsL837vaivIoL4-RRQDuvsshwPrbgmWZ",
      messages: [
        {
          date: "10/10/2019",
          text: "Take your paws off me you damn, dirty duck!"
        },
        {
          date: "13/03/2020",
          text: "Frankly my dear, I don't give a duck."
        }
      ]
    },
    {
      from: "Dave Zanckovsky",
      id: 3,
      online: Math.random() > 0.3,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrkzALuLMONDowjLvf6bq-wPK8x0l88ZTWUTrxqnfaOB0vM35V",

      messages: [
        {
          date: "30/12/2019",
          text:
            'My mama always said, "life is like a diet plan, you never like what you\'re gonna get."'
        },
        {
          date: "10/01/2020",
          text: "Hack or Do Not Hack. There are no firewalls."
        },
        {
          date: "02/02/2020",
          text:
            "My name is Danny O'Malley. You drank my last beer, prepare to die. "
        }
      ]
    },
    {
      from: "Julie Dane",
      id: 4,
      online: Math.random() > 0.3,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkvW7m5XGLv8sp3P02stEa2I_z4djsKzBgoQGbAIRDWEAgL7fN",
      messages: [
        {
          date: "27/08/2019",
          text:
            "A man asked a fairy to make him desirable and irresistible to all women in bed. She turned him into a book."
        },
        {
          date: "29/12/2019",
          text: "When life gives you limes, I say reach for the tequila"
        },
        {
          date: "15/03/2020",
          text: "Political Lessons: If at first you don't succeed, cheat."
        }
      ]
    }
  ],
  myMessages: [
    {
      to: "Anny Sitto",
      id: 1,
      messages: [
        {
          date: "14/12/2019",
          text: "When life gives you limes, I say reach for the tequila",
          mine: "mine"
        },
        {
          date: "15/03/2020",
          text: "Political Lessons: If at first you don't succeed, cheat.",
          mine: "mine"
        }
      ]
    },
    {
      to: "Mike Ferguson",
      id: 2,
      messages: [
        {
          date: "27/02/2020",
          text:
            "A man asked a fairy to make him desirable and irresistible to all women in bed. She turned him into a book.",
          mine: "mine"
        },
        {
          date: "15/03/2020",
          text: "Political Lessons: If at first you don't succeed, cheat.",
          mine: "mine"
        }
      ]
    },
    {
      to: "Dave Zanckovsky",
      id: 3,
      messages: [
        {
          date: "14/12/2019",
          text: "When life gives you limes, I say reach for the tequila",
          mine: "mine"
        },
        {
          date: "15/03/2020",
          text: "Political Lessons: If at first you don't succeed, cheat.",
          mine: "mine"
        }
      ]
    },
    {
      to: "Julie Dane",
      id: 4,
      messages: [
        {
          date: "14/12/2019",
          text: "When life gives you limes, I say reach for the tequila",
          mine: "mine"
        },
        {
          date: "15/03/2020",
          text: "Political Lessons: If at first you don't succeed, cheat.",
          mine: "mine"
        }
      ]
    }
  ],
  isLoading: false
};

export const onMessageAdd = (state = initialValue, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return { ...state, isLoading: true };
    case SEND_MESSAGE_SUCCESS:
      const pushTo = state.myMessages.filter(
        item => item.id == action.payload.id
      )[0];
      pushTo.messages.push(action.payload.message);
      const num = state.myMessages.indexOf(pushTo);
      const messages = [...state.myMessages];
      messages[num] = pushTo;

      return { ...state, myMessages: [...messages], isLoading: false };
    case SEND_MESSAGE_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
