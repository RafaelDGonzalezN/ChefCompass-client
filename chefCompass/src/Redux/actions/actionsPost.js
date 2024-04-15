import axios from "axios"
import { LOGIN_USER, POST_RECETS, POST_USERS } from "./actionsTypes"

export const postUsers = (payload) => {
  return async function(dispatch){
    try {
      await axios.post('http://localhost:3001/users', payload)
      .then(response => {
        dispatch({
          type: POST_USERS,
          payload:response.data
        })
      })   
    } catch (error) {
      console.error(error.message);
    }
  }
}

export const postRecets = (payload) => {
  return async function(dispatch){
    try {
      await axios.post('http://localhost:3001/recets', payload)
      .then(response => {
        dispatch({
          type: POST_RECETS,
          payload:response.data
        })
      })
    } catch (error) {
      console.error(error.message);
    }
  }
}

export const login = (email, password) => {
  return async function(dispatch){
    try {
      const response = await axios.post('http://localhost:3001/users/login', {email, password})
        dispatch({
          type:LOGIN_USER,
          payload:response.data
        })
    } catch (error) {
      console.error(error.message);
      
    }
  }
}