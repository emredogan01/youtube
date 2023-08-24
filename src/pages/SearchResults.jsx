import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getData } from '../utils/Helpers';
import SideNav from '../components/SideNav';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';

const SearchResults = () => {

    const [params, setParams] = useSearchParams();
    const [results, setResults] = useState(null);
    // url'deki arama terimine ulaşma
    const query = params.get("search_query")

    useEffect(()=>{
        setResults(null);
        getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`)
        .then((data)=> setResults(data))
    },[query])

    // öneriye tıklamada çalışır
    const handleClick = ()=>{
      setParams({search_query: results.didYouMean})
    }

  return (
    <div className='flex bg-[#0F0F0F] text-white min-h-[100vh] align-center'>
        <SideNav />
        <div className='flex w-[900px] flex-col gap-20 p-10'>
        {results?.didYouMean && (
        <p onClick={handleClick} className='cursor-pointer'>Bunu mu kastetmek istediniz <span className='font-bold'>{results?.didYouMean}</span></p>)}

        {!results ? (
        <Loading />
        ) : (
            results.contents.map((item, i)=>{
            if(item.type !== "video") return;
            return <VideoCard key={i} video={item.video}/>
        })
        )}
        </div>
    </div>
  )
}

export default SearchResults