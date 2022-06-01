import Head from 'next/head'
import HomePage from '../components/HomePage';
import App from '../src/App';
import {Provider, useDispatch} from 'react-redux';
import store from "../src/redux/store";
import Project_info from '../components/Project_info';


export default function Home() {
  return (
    <div>
      <Head>
        <title>If Club Official</title>
        <meta name="description" content="If Club Official Website" />
        <link rel="icon" href="/if_logo.png" />
      </Head>
      <HomePage />
      <Project_info />
      {/* <Provider store={store}>
    <App />
  </Provider> */}
    </div>
  );
}
