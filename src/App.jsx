import { Routes,Route } from "react-router-dom";
import "./App.css"
import Home from "./components/userPannel/Home";
import Footer from "./components/userPannel/Footer";
import Header from "./components/userPannel/Header";
import Skills from "./components/userPannel/Skills";
import About from "./components/userPannel/About";
import Contact from "./components/userPannel/contact";
import Project from "./components/userPannel/Project"
import Experience from "./components/userPannel/Experience";
import LoadingPage from "./components/userPannel/LoadingPage";
import { useEffect, useState } from "react";


function App(){

    const[loading,setLoading]=useState(true)

    useEffect(()=>{
const timer=setTimeout(()=>setLoading(false),2000)
return ()=>clearTimeout(timer)
    },[])
    return   loading?<LoadingPage/>:<>
    
    <div className="min-h-screen mt-[-10px] bg-[url('./assets/bg.gif')] bg-cover bg-no-repeat bg-center bg-scroll w-full">

     <Header/>
 <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>


        </Routes>
    <Footer/>
    </div>
    </>
}
export default App;