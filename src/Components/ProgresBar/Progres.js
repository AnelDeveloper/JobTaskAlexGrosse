import React from 'react'
import Question from '../Questions/Question';

import { useState } from 'react';

import './Progres.css'
const ProgressBarComp = ({ precentage }) => {




  return (
    <div className='progres'>
      <div className='progressBar'>
        <div className="barStatus" style={{ width: `${precentage}%` }}>
        </div>
      </div>
    </div>
  )
}

export default ProgressBarComp