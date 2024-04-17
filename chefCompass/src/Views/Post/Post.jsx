import { useState } from "react";
import { useDispatch } from "react-redux";
import { postRecets } from "../../Redux/actions/actionsPost";

const Post = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    image:"",
    name:"",
    duration:"",
    ingredients:"",
    preparation:""
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // No es necesario dividir los ingredientes aquí, ya que se guardarán como una cadena de texto
    const postData = { ...input };

    console.log(postData);

    // Enviar la solicitud POST con los datos actualizados
    const data = await dispatch(postRecets(postData));
  };

  return(
    <div className="container col-6">
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="row mt-5">
          <label htmlFor="image" className="form-label">Image</label>
          <input 
            type="url"
            name="image"
            value={input.image}
            onChange={handleChange}
            placeholder="Into to image"
            className="form-control"/>
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            className="form-control"
            />
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="text"
            name="duration"
            value={input.duration}
            onChange={handleChange}
            className="form-control"/>
          <label htmlFor="ingredients" className="form-label">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            value={input.ingredients}
            onChange={handleChange}
            className="form-control"/>
          <label htmlFor="preparation" className="form-label">Preparation</label>
          <textarea
            type="text"
            name="preparation"
            value={input.preparation}
            onChange={handleChange}
            className="form-control"/>
        </div>   
        <button type="submit" className="btn btn-primary mt-4">Submit</button>    
      </form>
    </div>
  )
}

export default Post;