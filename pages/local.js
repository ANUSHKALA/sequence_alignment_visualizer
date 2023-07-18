import React, { useState } from "react";
import SmithWaterman from "../components/SmithWaterman";
import SeqInput from "../components/seqInput";
import Image from "next/image";
import Link from "next/link";

const Local = () => {
  // Smith–Waterman Algorithm
  const [sequenceA, setSequenceA] = useState("ACCAC");
  const [sequenceB, setSequenceB] = useState("ACGAT");
  const [config, setConfig] = useState({
    match: 1,
    mismatch: -1,
    gap: -2,
  });

  return (
    <div className="grid md:grid-cols-4 h-screen w-screen">
      <div className="grid md:col-span-1 bg-amber-100">
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
          <div className="flex flex-wrap justify-center h-screen items-center">
            <div>
              <div className="mx-10 p-2 my-5">
                <div className="text-center font-bold text-3xl">
                  Smith–Waterman Algorithm
                </div>
              </div>
              <div className="flex flex-wrap justify-center">
                <SeqInput
                    value={sequenceA}
                    placeholder="Sequence 1"
                    label={"Sequence 1"}
                    onChange={(e) => {
                      setSequenceA(e.target.value);
                    }}
                />
                <SeqInput
                    value={sequenceB}
                    placeholder="Sequence 2"
                    label={"Sequence 2"}
                    onChange={(e) => {
                      setSequenceB(e.target.value);
                    }}
                />
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div className="grid row-span-1">
                <div className="grid">
                  <SeqInput
                      value={config.mismatch}
                      placeholder="-1"
                      parseInt
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
              </div>
              <div className="">
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
      <div className="grid md:col-span-3 bg-white h-screen ">
        <div className="flex flex-wrap justify-center items-center mx-5 my-10">
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
