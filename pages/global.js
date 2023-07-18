import React, { useState } from "react";
import Needleman from "../components/Needleman";
import SeqInput from "../components/seqInput";
import Link from "next/link";
import Image from "next/image";

const Global = () => {
  const [sequenceA, setSequenceA] = useState("ACCAC");
  const [sequenceB, setSequenceB] = useState("ACGAT");
  const [config, setConfig] = useState({
    match: 1,
    mismatch: -1,
    gap: -2,
  });

  return (
    <div className="grid md:grid-cols-4 h-full w-screen">
      <div className="grid md:col-span-1 bg-gradient-to-b from-rose-200 via-orange-100 to-amber-200">
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
          <div className="h-screen">

              <div className="mx-10 p-2 my-5">
                <div className="text-center font-bold text-3xl">
                  Needleman Wunsch Algorithm
                </div>
              </div>
              <div className="flex flex-wrap justify-center">
                <SeqInput
                  value={sequenceA}
                  placeholder="Sequence 1"
                  label={"Sequence 1"}
                  onChange={(e) => {
                    if (e.target.value.length > 15) return;
                    if (e.target.value.match(/[^ACGT]/g)) return;
                    setSequenceA(e.target.value);
                  }}
                />
                <SeqInput
                  value={sequenceB}
                  placeholder="Sequence 2"
                  label={"Sequence 2"}
                  onChange={(e) => {
                    if (e.target.value.length > 15) return;
                    if (e.target.value.match(/[^ACGT]/g)) return;
                    setSequenceB(e.target.value);
                  }}
                />
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
      <div className="grid md:col-span-3 bg-white h-full bg-gradient-to-t from-stone-500 via-gray-300 to-stone-500">
        <div className="flex flex-wrap justify-center items-center mx-5 my-10">
          <Needleman
            sequenceA={sequenceA}
            sequenceB={sequenceB}
            config={config}
          />
        </div>
      </div>
    </div>
  );
};

export default Global;
