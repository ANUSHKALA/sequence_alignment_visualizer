import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={""}>
      <div className=" h-screen bg-emerald-500 flex items-center justify-center">
        <div className=" flex flex-wrap my-20 ">
          <div className="text-justify">
            <div className="flex justify-center text-gray-900">
              <Image className="text-gray-900" src="/dna.svg" width={150} height={100} alt="a dna strand"/>
            </div>
            <div className="text-center text-2xl capitalize px-auto p-10 pb-20">
              <h2 className="md:text-5xl text-4xl font-bold text-gray-900 ">
                Sequence Alignment Visualization
              </h2>
            </div>
            <div className="grid grid-rows-1 ">
              <Link
                className="mx-auto text-center mb-6 md:w-96 px-4 py-4 w-64  font-bold border-b-4 border-gray-900 hover:border-gray-900 "
                href="/global"
              >
                <h3 className="text-3xl hover:scale-110 text-gray-900">Global Alignment</h3>
              </Link>
              <Link
                className="mx-auto text-center mb-6 md:w-96 px-4 py-4 w-64 font-bold border-b-4 border-gray-900 hover:border-gray-900 "
                href="/local"
              >
                <h3 className="text-3xl hover:scale-110 text-gray-900">Local Alignment</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className={""}></footer>
    </div>
  );
}
