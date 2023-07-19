import Link from "next/link";

export default function Home() {
  return (
    <div className={""}>
      <div className=" h-screen bg-gradient-to-r from-rose-200 via-orange-100 to-amber-200 flex items-center justify-center">
        <div className=" flex flex-wrap my-20 ">
          <div className="text-justify">
            <div className="text-center text-2xl capitalize px-auto p-10 pb-20">
              <h2 className="md:text-5xl text-4xl font-bold text-gray-900 ">
                Sequence Alignment Visualization
              </h2>
            </div>
            <div className="grid grid-rows-1 ">
              <Link
                className="mx-auto text-center mb-6 md:w-96 px-4 py-4 w-64  font-bold border-b-4 border-gray-700 hover:border-gray-900 "
                href="/global"
              >
                <h3 className="text-3xl hover:scale-110 text-gray-700">Global Alignment</h3>
              </Link>
              <Link
                className="mx-auto text-center mb-6 md:w-96 px-4 py-4 w-64 font-bold border-b-4 border-gray-700 hover:border-gray-900 "
                href="/local"
              >
                <h3 className="text-3xl hover:scale-110 text-gray-700">Local Alignment</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className={""}></footer>
    </div>
  );
}
