import { 
  GET_ALL_RECETS, 
  POST_RECETS, 
  POST_USERS,
  LOGIN_USER 
} from "../actions/actionsTypes";

let initialState = {
  allRecets: [],
  newUsers: {},
  newRecets:{},
  currentUser: null
};

function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_ALL_RECETS:
      return{
        ...state,
        allRecets: action.payload 
      };
    case POST_USERS:{
      return{
        ...state,
        newUsers:action.payload
      }
    }
    case POST_RECETS:{
      return{
        ...state,
        newRecets:action.payload
      }
    }
    case LOGIN_USER: {
      return {
        ...state,
        currentUser: action.payload 
      };
    }
    default:
      return state;
  }
}

export default rootReducer;