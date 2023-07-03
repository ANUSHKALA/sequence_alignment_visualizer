import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Sequence Alignment Visualization</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className=" h-screen bg-gray-900 flex items-center justify-center">
            <div className=" flex flex-wrap my-20 ">
                <div className="text-justify">
                    <div className="text-center text-2xl capitalize px-auto p-10 pb-20">
                        <h2 className="md:text-5xl text-4xl font-bold text-gray-300 ">Sequence Alignment Visualization</h2>
                    </div>
                    <div className="grid grid-rows-1 ">
                        <Link className="mx-auto text-center p-4 bg-gray-300 mb-6 md:w-96 p-10 w-64 " href="/global">
                            <h3 className="text-2xl text-gray-700">Global Algorithm</h3>
                        </Link>
                        <Link className="mx-auto text-center p-4 bg-gray-300 md:w-96 p-10 w-64" href="/local">
                            <h3 className="text-2xl text-gray-700">Local Algorithm</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/*<div className='my-10'>*/}

        {/*<Link className='m-5 p-3 bg-slate-200 rounded-lg hover:bg-slate-300' href="/local">*/}
        {/*Local Sequence Alignment*/}
        {/*</Link>*/}

        {/*<Link className='m-5 p-3 bg-slate-200 rounded-lg hover:bg-slate-300' href="/global">*/}
        {/*Global Sequence Alignment*/}
        {/*</Link>*/}
        {/*</div>*/}

      <footer className={""}>
       
      </footer>
    </div>
  )
}
