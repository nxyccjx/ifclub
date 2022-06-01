import Info from '../components/tfg/Info';
import Head from 'next/head'
import Intro from '../components/tfg/Intro';
import QA_tfg from '../components/QA_tfg';


export default function tlg() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>
      <Intro />
      <Info />
      <QA_tfg />
    </div>
  );
}
