import React, {useState} from 'react';
import Needleman from '../components/Needleman';
import SeqInput from '../components/seqInput';
import Link from "next/link";
import Image from "next/image";

const Global = () => {

    const [sequenceA, setSequenceA] = useState("ACCAC");
    const [sequenceB, setSequenceB] = useState("ACGAT");
   

   return(
       <div className="grid md:grid-cols-4 h-screen w-screen">
           <div className="grid md:col-span-1 bg-amber-100">
               <div>
                   <div className="mt-3 ml-4">
                       <Link href="/">
                           <Image src="/back.svg" width={40} height={40} className="" alt="back" />
                       </Link>
                   </div>
                   <div className="flex flex-wrap justify-center h-screen items-center">
                       <div>
                           <div className="mx-10 p-2 my-5">
                               <div className='text-center font-bold text-3xl'>Needleman Wunsch Algorithm</div>
                           </div>
                           <div className="flex flex-wrap justify-center">
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
                           </div>
                       </div>
                       <div className="grid grid-rows-2">
                           <div className="grid row-span-1">
                               <div className="grid ro">
                                   <SeqInput value={sequenceB} placeholder='-1' label={"Mismatch"} onChange={
                                       (e) => {
                                           setSequenceB(e.target.value);
                                       }
                                   }/>
                               </div>
                               <div className="">
                                   <SeqInput value={sequenceB} placeholder='-1' label={"Match"} onChange={
                                       (e) => {
                                           setSequenceB(e.target.value);
                                       }
                                   }/>
                               </div>
                           </div>
                           <div className="">
                               <SeqInput value={sequenceB} placeholder='-1' label={"Gap"} onChange={
                                   (e) => {
                                       setSequenceB(e.target.value);
                                   }
                               }/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="grid md:col-span-3 bg-white h-screen ">
               <div className="flex flex-wrap justify-center items-center mx-5 my-10">
                   <Needleman sequenceA={sequenceA} sequenceB={sequenceB} />
               </div>
           </div>
       </div>

   )
}

export default Global;