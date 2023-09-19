import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"



const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h1 className="text-3xl md:text-5xl font-black tracking-wide text-emerald-400"><Link to="/">P:Blog</Link></h1>
    {path==="/" && <div className="flex justify-center items-center space-x-0">
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/>
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer text-emerald-400"><BsSearch/></p>    
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3 className="bg-gray-300 rounded-lg px-3 py-2 hover:bg-gray-400"><Link to="/write">Create a Post</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars className="text-emerald-400"/></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars className="text-emerald-400"/></p>
      {menu && <Menu/>}
    </div>

    </div>
  )
}

export default Navbar 