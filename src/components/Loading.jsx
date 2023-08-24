import gif from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className='h-full w-full grid place-items-center'>
        <img className='max-w-[80px]' src={gif} />
    </div>
  )
}

export default Loading