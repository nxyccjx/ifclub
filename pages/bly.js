import Head from 'next/head'
import Intro_bly from '../components/bly/Intro_bly';
import App from '../src/App';
import {Provider, useDispatch} from 'react-redux';
import store from "../src/redux/store";
import QA_bly from '../components/bly/QA_bly';

export default function tlg() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>
      <Intro_bly />
      <Provider store={store}>
         <App />
      </Provider>
      <QA_bly />
    </div>
  );
}
