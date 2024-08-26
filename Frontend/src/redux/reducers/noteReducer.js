import { NOTE_TYPES } from "../types";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
      tag: "personal",
      time: new Date().getTime(),
    },
    {
      id: 2,
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
      tag: "personal",
      time: new Date().getTime(),
    },
    {
      id: 3,
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
      tag: "personal",
      time: new Date().getTime(),
    },
    {
      id: 4,
      title: "Title 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis officia, suscipit tempore ab alias amet quidem eos ducimus veniam, necessitatibus sunt magni explicabo hic rerum voluptatibus unde, natus optio!",
      tag: "personal",
      time: new Date().getTime(),
    },
  ],
};

export const notes = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case NOTE_TYPES.CREATE_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case NOTE_TYPES.GET_ALL_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};
