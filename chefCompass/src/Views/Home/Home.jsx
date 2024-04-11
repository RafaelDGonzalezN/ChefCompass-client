import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getAllRecets } from "../../Redux/actions/actions";
import "./Home.module.css"

const Home = () => {

  const dispatch = useDispatch();
  const recets = useSelector((state) => state.allRecets)

  if (!Array.isArray(recets)) {
    return <div>Loading...</div>;
  }
  
  useEffect(() => {  
    dispatch(getAllRecets())
  },[dispatch]);

  return(
    <>
      <SearchBar/>
      <div className="container d-flex" style={{alignItems:"center", paddingTop:"50px"}} >
        {/* <Sidebar/> */}
        <Cards recets={recets}/>
      </div>
    </>
  )
}

export default Home;