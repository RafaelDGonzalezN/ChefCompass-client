import { GET_ALL_RECETS } from "../Actions/actions-types";

let initialState = {
  allRecets: {},
};

function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_ALL_RECETS:
      return{
        ...state,
        allRecets: action.payload 
      };
    default:
      return state;
  }
}

export default rootReducer;