import { useState } from "react"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { postUsers } from "../../Redux/actions/actionsPost"

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    name:"",
    last_name:"",
    email:"",
    password:"",
    profile_picture:""
  })


  const handleChange = (e) => {
    const {name, value} = e.target;
      setInput((prevData) => ({
      ...prevData,
      [name]:value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(postUsers(input))
    navigate("/login");
   
  }

  return(
    <div className="container col-6">
      <form  onSubmit={handleSubmit} className="mt-5">
        <div className="row mt-5">
          <div className="col-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              name="name"
              value={input.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input 
              type="text" 
              name="last_name" 
              value={input.last_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
            <input 
              type="text" 
              name="profile_picture"
              value={input.profile_picture}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="row mb-3 mt-5">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control" 
                name="email"
                value={input.email}
                onChange={handleChange}/>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">contraseña:</label>
            <div className="col-sm-10">
              <input 
                type="password" 
                className="form-control" 
                name="password"
                value={input.password}
                onChange={handleChange}/>
            </div>
          </div>
          
        </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>

      </form>
    </div>
  )
}

export default Register;