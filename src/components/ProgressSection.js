import React from 'react'
import ProgressItem from './ProgressItem'
import { AiOutlineCheck, AiFillLock, AiFillUnlock } from "react-icons/ai";

function ProgressSection({progressSection, itemChange}) {

  const itemClick = (itemId) => {
    if (progressSection.isMutable && !progressSection.isCompleted) {
      itemChange(progressSection.id, itemId)
    } 
  }

  return (
    <div className="progress-section">
      <div className="progress-section-heading">
        <div className="progress-section-number">
          <div className="num-tag">
            {progressSection.id}
          </div> 
        </div>
        <div className="progress-section-name">
          <strong>
            {progressSection.isCompleted ? <AiFillLock color='#466eb4' /> : <AiFillUnlock />}
            {progressSection.name}
            {progressSection.isCompleted ? <AiOutlineCheck color='#466eb4' /> : ''}
          </strong>
        </div>
      </div>
    <div className="progress-section-body">
      { progressSection.items.map((row) => ( <ProgressItem key={row.id} text={row.text} isFinished={row.isFinished} onClick={ () => itemClick(row.id)} /> )) }

    </div>
  </div>
  )
}

export default ProgressSection
