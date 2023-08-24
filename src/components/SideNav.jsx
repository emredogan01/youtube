import {categories} from "../utils/constants"
import { useContext } from "react"
import { YoutubeContext } from "../context/youtubeContext"


const SideNav = () => {
  // context yapısına abone olma
  const {selectedCategory, setSelectedCategory} = useContext(YoutubeContext)


  return (
    <nav className="flex flex-col p-4">
      {categories.map((item, i)=>(
        <div 
        key={i}
        // seçilen kategoryi centext e gönderme
        onClick={()=> setSelectedCategory(item)}>
        <div className={`
          ${selectedCategory.name === item.name && "bg-[#696969]" }
          flex items-center gap-3 p-2 py-4 text-lg rounded hover:bg-[#696969] transition cursor-pointer`}>
          {item.icon}
          <span>{item.name}</span>
        </div>
        {/* divider değeri true ise ekrana hr bas */}
        {item.divider && <hr />}
        </div>
      ))}
    </nav>
  )
}

export default SideNav