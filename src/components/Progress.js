import React from 'react'
import ProgressSection from './ProgressSection'

function Progress({progress, itemChange}) {

  return (
    <div className="progress">
      {progress.map((section, index) => (
        <ProgressSection key={index} progressSection={section} itemChange={itemChange} />
      ))}
    </div>
  )
}

export default Progress
