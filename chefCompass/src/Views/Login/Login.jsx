import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions/actionsPost";

const Login = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]:value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {email, password} = input;
    await dispatch(login(email, password))
  }

  return(
    <div  className="container col-6">
      <form  onSubmit={handleSubmit} className="mt-5">
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="text" 
              name="email" 
              value={input.email}
              onChange={handleChange}
              className="form-control"/>
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              name="password"
              value={input.password}
              onChange={handleChange}
              className="form-control"/>
          </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  )
}

export default Login;