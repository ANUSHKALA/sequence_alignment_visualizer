import React from 'react';
import Needleman from '../components/Needleman';

const Global = () => {
   

   return(
    <div className='container'>
    <div className='text-gray-900 text-2xl'>Needleman Wunsch Algorithm</div>
    <div>
        <Needleman sequenceA={"ACCAC"} sequenceB={"ACGAT"} />
    </div>
   </div>
   )
}

export default Global;