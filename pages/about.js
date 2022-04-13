import Head from 'next/head'
import Team from '../components/Team';

export default function about() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>

      <Team />

    </div>
  );
}
