import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import cookie from "js-cookie";

import { store } from "@/redux/store";
import { client } from "@/utils/gql/client";

import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Khayangan</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <div className="font-montserrat">
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </div>
    </>
  );
}

export default MyApp;
