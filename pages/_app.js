import React from 'react';
import '../styles/globals.css';

import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
