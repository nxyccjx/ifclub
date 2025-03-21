import Head from 'next/head'
import Intro from '../components/Intro';
import Info from '../components/Info';


export default function Home() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>
      <Intro />
      <Info />
    </div>
  );
}
