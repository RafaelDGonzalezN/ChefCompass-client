import { useDispatch, useSelector } from "react-redux";

import { getAllRecets } from "../../Redux/Actions/actions";

import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.module.css"

const Home = () => {

  // const dispatch = useDispatch();
  // const recets = useSelector((state) => state.allRecets)

  return(
    <>
      <SearchBar/>
      <div className="container d-flex" style={{alignItems:"center", paddingTop:"50px"}} >
        {/* <Sidebar/> */}
        <Cards/>
      </div>
    </>
  )
}

export default Home;