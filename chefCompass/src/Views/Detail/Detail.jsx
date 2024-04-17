import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { getDetail } from '../../Redux/actions/actions'

const Detail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const detalles = useSelector((state) => state.recetDetail)
  console.log(detalles);

  useEffect(() => {
    if(id){
      dispatch(getDetail(id))
    }
  }, [dispatch,id])

  return(
    <div className="container d-flex mt-5">
      <div className="container">
        <Link to="/">
          <button className='btn btn-primary'>Return Home</button>
        </Link>
      </div>
      <div className="container">
        {/* Reemplaza los datos estáticos por los datos dinámicos */}
        <img src={detalles.image} alt="" className="img-thumbnail img-fluid"/>
        <h1>{detalles.name}</h1>
        <h5>Duration: {detalles.duration}</h5>
        <h2>Ingredients:</h2>
        <ul>
          {detalles.ingredients && detalles.ingredients.split(", ").map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Preparation:</h2>
        <p>{detalles.preparation}</p>
      </div> 
    </div>
  )
}

export default Detail;