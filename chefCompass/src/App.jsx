import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import Favorites from "./Views/Favorites/Favorites";
import Login from "./Views/Login/Login";
import Post from "./Views/Post/Post";
import Register from "./Views/Register/Register";


import './App.css'

function App() {

  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
