
import {AiFillBell, AiOutlineSearch} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();

  const handleSubmit = (e)=> {
    // form gönderildiğinde çalışır
    e.preventDefault();
    console.dir(e.target[0].value)
    navigate(`/results?search_query=${e.target[0].value}`)

    e.target[0].value= "";
  }

  return (
    <header className="flex justify-between items-center bg-[#0F0F0F] text-white p-2">
        <Link to={"/"} className="flex items-center gap-3">
            <BsYoutube className="text-red-500 text-3xl"/>
            <h2 >YOUTUBE</h2>
        </Link>
        <form onSubmit={handleSubmit} className="bg-[#696969] text-black rounded p-2">
            <input className="outline-none bg-[#696969]" type="text" placeholder="Search..." />
            <button><AiOutlineSearch /></button>
        </form>
        <AiFillBell className="text-2xl"/>
    </header>
  )
}

export default Header