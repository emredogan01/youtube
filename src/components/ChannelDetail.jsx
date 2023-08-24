/* eslint-disable react/prop-types */
import millify from 'millify'
import moment from 'moment/moment'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import "moment/locale/tr"
import StringArea from './StringArea'

const ChannelDetail = ({ detail }) => {
  return (
    <>
        <h1 className="mt-3 text-xl font-bold p-3">{detail.title}</h1>
      {/* kanal hakkında bilgiler */}
        <div className="flex justify-between items-center p-3">
          <div className="flex gap-4">
            <img className="rounded-full" src={detail.author.avatar[0].url} />
            <div>
              <h4 className="font-bold">{detail.author.title}</h4>
              <p>{detail.author.stats.subscribersText}</p>
            </div>
            <button className="bg-white rounded-full h-9 text-black px-3 transition hover:bg-[#919090]">Abone Ol</button>
          </div>
          <div className="flex items-center rounded-full py-2 px-4 text-lg bg-[#929191]">
            <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
              <AiFillLike />
              <span>{millify(detail.stats.likes)}</span>
            </div>
            <div className="pl-2">
              <AiFillDislike />
            </div>
          </div>  
        </div>
        {/* video hakkında bilgiler */}
        <div className='bg-[#4e4e4e] rounded p-3 mt-2 hover:bg-[#5e5d5d]'>
            <div className='flex gap-3'>
                <p>{millify(detail.stats.views)} görüntüleme</p>
                <p>{moment(detail.publishedDate).fromNow()}</p>
                <ul className='flex gap-3'>
                    {detail.superTitle.items.slice(0,3).map((i, index)=> <li key={index}>{i}</li>)}
                </ul>
            </div>
            <StringArea text={detail.description} max={200} />
        </div>
      </>
  )
}

export default ChannelDetail