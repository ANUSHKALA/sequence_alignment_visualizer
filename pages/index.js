import Link from "next/link";

export default function Home() {
  return (
    <div className={""}>
      <div className=" h-screen  bg-gray-900 flex items-center justify-center">
        <div className=" flex flex-wrap my-20 ">
          <div className="text-justify">
            <div className="text-center text-2xl capitalize px-auto p-10 pb-20">
              <h2 className="md:text-5xl text-4xl font-bold text-gray-300 ">
                Sequence Alignment Visualization
              </h2>
            </div>
            <div className="grid grid-rows-1 ">
              <Link
                className="mx-auto text-center p-4 bg-gray-300 mb-6 md:w-96 p-10 w-64 "
                href="/global"
              >
                <h3 className="text-2xl text-gray-700">Global Algorithm</h3>
              </Link>
              <Link
                className="mx-auto text-center p-4 bg-gray-300 md:w-96 p-10 w-64"
                href="/local"
              >
                <h3 className="text-2xl text-gray-700">Local Algorithm</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className={""}></footer>
    </div>
  );
}
