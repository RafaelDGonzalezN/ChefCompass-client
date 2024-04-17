import axios from "axios";
import { GET_ALL_RECETS, GET_DETAIL } from './actionsTypes'

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

export const getDetail = (id) => {
  return async function(dispatch){
    try {
      const {data} = await axios.get(`http://localhost:3001/recets/${id}`)
      
      return dispatch({
        type:GET_DETAIL,
        payload: data
      })

    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      throw error; 
    }
  }
}