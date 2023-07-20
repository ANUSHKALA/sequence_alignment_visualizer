import React, { useState } from "react";
import SmithWaterman from "../components/SmithWaterman";
import SeqInput from "../components/seqInput";
import Image from "next/image";
import Link from "next/link";

const Local = () => {
  // Smith–Waterman Algorithm
  const [sequenceA, setSequenceA] = useState("ACCAC");
  const [sequenceB, setSequenceB] = useState("ACGAT");
  const [inputMode, setInputMode] = useState(0); // "userInput -> 0" or "fastaFile -> 1"

  const [config, setConfig] = useState({
    match: 1,
    mismatch: -1,
    gap: -2,
  });

  const handleDropdownChange = (event) => {
    setInputMode(event.target.value);
  };

  function parseFastaFile(fileContent) {
    const lines = fileContent.split(/\r?\n/);
    const sequences = [];
    let currentSequence = "";
  
    for (const line of lines) {
      if (line.startsWith(">")) {
        if (currentSequence) {
          sequences.push(currentSequence);
        }
        currentSequence = "";
      } else {
        currentSequence += line.trim();
      }
    }
  
    if (currentSequence) {
      sequences.push(currentSequence);
    }
  
    return sequences;
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
  
    if (!file) {
      alert("No file selected.");
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const fileContent = e.target.result;
      const sequences = parseFastaFile(fileContent);
  
      if (sequences.length < 2) {
        alert("The FASTA file should contain at least two sequences.");
        return;
      }
  
      const sequenceA = sequences[0];
      const sequenceB = sequences[1];

      setSequenceA(sequenceA);
      setSequenceB(sequenceB);
    };
  
    reader.readAsText(file);
  }

  return (
    <div className="grid md:grid-cols-4 h-screen w-screen">
      <div className="grid md:col-span-1 bg-emerald-600">
        <div>
          <div className="mt-3 ml-4">
            <Link href="/">
              <Image
                src="/back.svg"
                width={48}
                height={48}
                className="inline-block p-2"
                alt="back"
              />
            </Link>
          </div>
          <div className=" h-screen">
            <div>
              <div className="mx-10 p-2 my-5">
                <div className="text-center font-bold text-3xl">
                  Smith–Waterman Algorithm
                </div>
              </div>
              <div className="flex flex-wrap justify-center">
                  <div className="flex flex-wrap justify-center min-w-full">
                      <select
                          value={inputMode}
                          onChange={handleDropdownChange}
                          className="block w-3/5 px-2 mb-12 py-3 text-base text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                          <option value={0}>User Input</option>
                          <option value={1}>FASTA File</option>
                      </select>
                  </div>
              {inputMode === 0 ||inputMode === "0" ? (
                <>
                  <SeqInput
                    value={sequenceA}
                    placeholder="Sequence 1"
                    label={"Sequence 1"}
                    onChange={(e) => {
                      if (e.target.value.length > 15) return;
                      // if (e.target.value.match(/[^ACGT]/g)) return;
                      setSequenceA(e.target.value);
                    }}
                  />
                  <SeqInput
                    value={sequenceB}
                    placeholder="Sequence 2"
                    label={"Sequence 2"}
                    onChange={(e) => {
                      if (e.target.value.length > 15) return;
                      // if (e.target.value.match(/[^ACGT]/g)) return;
                      setSequenceB(e.target.value);
                    }}
                  />
                </>
              ) : (
                <div>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".fasta"
                  />
                </div>
              )}
              </div>
            </div>


              <div className="flex flex-wrap lg:justify-center md:justify-start justify-center mt-10">
                  <div className="">
                      <SeqInput
                          value={config.mismatch}
                          placeholder="-1"
                          label={"Mismatch"}
                          type="number"
                          onChange={(e) => {
                              setConfig({
                                  ...config,
                                  mismatch: e.target.value,
                              });
                          }}
                      />
                  </div>
                  <div className="">
                      <SeqInput
                          value={config.match}
                          placeholder="1"
                          label={"Match"}
                          type="number"
                          onChange={(e) => {
                              setConfig({
                                  ...config,
                                  match: e.target.value,
                              });
                          }}
                      />
                  </div>
                  <div>
                      <SeqInput
                          value={config.gap}
                          placeholder="-1"
                          type="number"
                          label={"Gap"}
                          onChange={(e) => {
                              setConfig({
                                  ...config,
                                  gap: e.target.value,
                              });
                          }}
                      />
                  </div>
              </div>


          </div>
        </div>
      </div>
      <div className="grid md:col-span-3 bg-slate-800 h-full">
        <div className="flex flex-wrap justify-center items-center uppercase mx-5 my-10">
          <SmithWaterman
            sequenceA={sequenceA}
            sequenceB={sequenceB}
            config={config}
          />
        </div>
      </div>
    </div>
  );
};

export default Local;
