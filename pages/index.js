import Link from 'next/link'

export default function Home() {
  return (
    <div className={""}>

      <main className={"container mx-auto"}>
        <div className='my-10'>

        <Link className='m-5 p-3 bg-slate-200 rounded-lg hover:bg-slate-300' href="/local">
        Local Sequence Alignment
        </Link>

        <Link className='m-5 p-3 bg-slate-200 rounded-lg hover:bg-slate-300' href="/global">
        Global Sequence Alignment
        </Link>
        </div>
      </main>

      <footer className={""}>
       
      </footer>
    </div>
  )
}
