import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Local Sequence Alignment visualization</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <Link className='m-5 p-3 bg-slate-200 rounded-lg' href="/local">
        Local Sequence Alignment
        </Link>

        <Link className='m-5 p-3 bg-slate-200 rounded-lg' href="/global">
        Global Sequence Alignment
        </Link>
      </main>

      <footer className={""}>
       
      </footer>
    </div>
  )
}
