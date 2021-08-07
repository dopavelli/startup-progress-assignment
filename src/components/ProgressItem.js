import React from 'react'
import { AiOutlineBorder, AiFillCheckSquare } from "react-icons/ai";

function ProgressItem({text, isFinished, onClick}) {

  return (
    <div className='progress-item' onClick={onClick}>
      { isFinished ? <AiFillCheckSquare color='#466eb4' /> : <AiOutlineBorder />} {text}
    </div>
  )
}

export default ProgressItem
