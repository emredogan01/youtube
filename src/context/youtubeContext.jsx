import axios from "axios";
import { createContext, useState, Children, useEffect } from "react";
import { options } from "../utils/constants";

export const YoutubeContext = createContext();
// conetext de tutulan bütün verileri uygulamaya aktaracak
export const YoutubeProvider = ({ children }) =>{

    const [ selectedCategory, setSelectedCategory] = useState({
        name:"New", 
        type: "category", 
    });

    const [videos, setVideos] = useState(null);

    // selected category nin değişimini izle
    useEffect(()=>{
        // eski videoları sil
        setVideos(null);
        // seçilen seçeneğin tipi category ise verileri çek
        if(selectedCategory.type === "category"){
            fecthCatogory(selectedCategory.name)
        }
    },[selectedCategory])

    const fecthCatogory = (category)=>{
        axios.get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
        .then((res) => setVideos(res.data.contents))
        .catch((err)=> console.log(err))
    };


    return(
        <YoutubeContext.Provider 
        value={{ selectedCategory,
             setSelectedCategory,
             videos,
            }}
        >
            {children}
        </YoutubeContext.Provider>
    );
};