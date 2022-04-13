import Head from 'next/head'
import QA from '../components/QA';

export default function faq() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>
      <QA />
    </div>
  );
}
