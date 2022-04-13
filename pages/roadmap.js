import Head from 'next/head'
import Roadmap from '../components/Roadmap';




export default function roadmap() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>
      <Roadmap />
    </div>
  );
}
