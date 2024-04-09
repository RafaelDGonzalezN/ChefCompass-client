import axios from "axios";

import { GET_ALL_RECETS } from "./actions-types"

export const getAllRecets = () => {
  return async function(dispatch){
    try {

      const {data} = await axios(`http://localhost:3001/recets/`)
      console.log(data);

      return dispatch({
        type: GET_ALL_RECETS,
        payload:response.data,
      })
    } catch (error) {
      console.error(error.message);
    }
  }
}