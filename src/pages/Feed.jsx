import SideNav from "./../components/SideNav"
import { YoutubeContext } from "../context/youtubeContext"
import { useContext } from "react"
import Loading from "../components/Loading";
import VideoCard from "./../components/VideoCard";


const Feed = () => {

  const {videos} = useContext(YoutubeContext);

  return (
    <div className="flex min-h-[100vh] bg-[#0f0f0f] text-white">
      <SideNav />
      <div className="videos w-full">
        {!videos ? <Loading /> : videos.map((item)=> {
        // elemanın tipi video değilse ekrana basma
        if(item.type !== "video") return;
        // video var ise ekrana VideoCard bileşenini bas
        return <VideoCard key={item.video.videoId} video={item.video} />})}
      </div>
    </div>
  )
}

export default Feed;