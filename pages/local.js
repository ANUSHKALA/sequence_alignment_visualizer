import React,{useState} from 'react';
import SmithWaterman from '../components/SmithWaterman';
import SeqInput from '../components/seqInput';


const Local = () => {

  const [sequenceA, setSequenceA] = useState("ACCAC");
    const [sequenceB, setSequenceB] = useState("ACGAT");
      
  return (
    <div className='container mx-auto'>
    <div className='text-gray-900 text-2xl'>{'Smith–Waterman algorithm'}</div>
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
        <SmithWaterman sequenceA={sequenceA} sequenceB={sequenceB} />
    </div>
   </div>
  )
}

export default Local;