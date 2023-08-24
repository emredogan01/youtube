import React, { useState } from 'react'

const StringArea = ({ text, max}) => {

    const [showFull, setShowFull] = useState(false);
    

    let shortText = text;

    if(text.length > max && !showFull){
        shortText = text.slice(0, max) + "... Daha fazla";
    }

  return (
    <div onClick={()=> setShowFull(!showFull)}>
        {shortText.split("\n").map((line, i)=> <span key={i}>
        {line}
        <br />
        </span>)}
    </div>
  )
}

export default StringArea