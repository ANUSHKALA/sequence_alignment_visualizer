import React from 'react';
import SmithWaterman from '../components/SmithWaterman';

const Local = () => {
      
  return (
    <div className='container'>
    <div className='text-gray-900 text-2xl'>{'Smith–Waterman algorithm'}</div>
    <div>
        <SmithWaterman sequenceA={"ACCAC"} sequenceB={"ACGAT"} />
    </div>
   </div>
  )
}

export default Local;