//hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//actions
import { getAllRecets } from "../../Redux/actions/actions";
//Components
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import NavBar from "../../Components/NavBar/NavBar";
import Sidebar from "../../Components/Sidebar/Sidebar";
//stiles
import "./Home.module.css"


const Home = () => {

  const dispatch = useDispatch();
  const recets = useSelector((state) => state.allRecets)

  useEffect(() => {  
    dispatch(getAllRecets())
  },[dispatch]);

  return(
    <>
      <NavBar/>
      <SearchBar/>
      <div className="container d-flex" style={{alignItems:"center", paddingTop:"50px"}} >
        {/* <Sidebar/> */}
        <Cards recets={recets}/>
      </div>
    </>
  )
}

export default Home;