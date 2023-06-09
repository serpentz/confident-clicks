import { CHANGE_MODAL, NEW_QUESTION, CHOOSE_OPTION, CHANGE_SCORE, VISIT_OPTION, CHANGE_AUDIO } from "../hooks/types";
import data from "../data/game.json";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case CHANGE_AUDIO:
      return {
        ...state,
        audio: action.payload.audio,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        currentScore: state.currentScore - (action.payload.score),
      };
    case CHOOSE_OPTION:
      return {
        ...state,
        option: action.payload.option,
      };
    case VISIT_OPTION:
      return {
        ...state,
        visited: [...state.visited, action.payload.app],
      };
    case NEW_QUESTION:
      let id = action.payload.question
      if(state.visited.length === 4 && id == 12.1){
        return {
          ...state,
          question: state.data.questions[-1],
        };
      }
      return {
        ...state,
        question: state.data.questions[id],
      };

    default:
      return state;
  }
};

export const initialState = {
  modal: false,
  data,
  question: data.questions[1],
  audio: null,
  option: { score: null },
  visited: [],
  topScore: 21,
  currentScore: 21,
};
