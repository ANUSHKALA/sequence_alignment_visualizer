import React, {useState} from 'react';
import Needleman from '../components/Needleman';
import SeqInput from '../components/seqInput';

const Global = () => {

    const [sequenceA, setSequenceA] = useState("ACCAC");
    const [sequenceB, setSequenceB] = useState("ACGAT");
   

   return(
    <div className='container mx-auto'>
    <div className='text-gray-900 text-2xl'>Needleman Wunsch Algorithm</div>
    <>
    <SeqInput value={sequenceA} placeholder='Sequence 1' label={"Sequence 1"} onChange={
        (e) => {
            setSequenceA(e.target.value);
        }
    }/>
    <SeqInput value={sequenceB} placeholder='Sequence 2' label={"Sequence 2"} onChange={
        (e) => {
            setSequenceB(e.target.value);
        }
    }/>
    </>
    <div>
        <Needleman sequenceA={sequenceA} sequenceB={sequenceB} />
    </div>
   </div>
   )
}

export default Global;