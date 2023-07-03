import '../styles/globals.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return( <>
  <Head>
        <title>Sequence Alignment Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Implementing the Needleman-Wunsch algorithm and Smith-Waterman algorithm for sequence alignment and visualization" />
        <meta property="og:title" content="Sequence Alignment Visualizer" />
        <meta property="og:description" content="Implementing the Needleman-Wunsch algorithm and Smith-Waterman algorithm for sequence alignment and visualization" />
        <meta property="og:url" content="https://sequence-alignment-visualizer.vercel.app/" />
        <meta property="og:site_name" content="Sequence Alignment Visualizer" />
        <meta property="og:image" content="/lead-scoring-matrix.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en-IN" />
        <meta property="og:type" content="website" />
      </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
