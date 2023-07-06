import React,{useState} from 'react';
import SmithWaterman from '../components/SmithWaterman';
import SeqInput from '../components/seqInput';
import Needleman from "../components/Needleman";


const Local = () => {

  const [sequenceA, setSequenceA] = useState("ACCAC");
    const [sequenceB, setSequenceB] = useState("ACGAT");
      
  return (
      <div className=" h-screen">
          <div className='flex flex-wrap justify-center items-center'>
              <div className=" flex items-center justify-center bg-gray-900 h-screen w-[50%]">
                  <div className="mx-20 my-36 p-2">
                      <div className='text-center text-3xl font-bold mb-10 text-gray-50'>Smith–Waterman Algorithm</div>
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
                      <div>

                      </div>
                  </div>
              </div>
              <div className="flex justify-center items-center h-screen w-[50%]">
                  <SmithWaterman sequenceA={sequenceA} sequenceB={sequenceB} />
              </div>
          </div>
      </div>
  )
}

export default Local;