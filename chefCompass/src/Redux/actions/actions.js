import axios from "axios";
import { GET_ALL_RECETS } from './actionsTypes'

export const getAllRecets = () => {
  return async function(dispatch){
    try {

      const {data} = await axios.get(`http://localhost:3001/recets/`)

      return dispatch({
        type: GET_ALL_RECETS,
        payload:data,
      })

    } catch (error) {
      console.error(error.message);
    }
  }
}