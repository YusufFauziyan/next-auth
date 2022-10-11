import { Provider } from "react-redux";
// import { ApolloProvider } from "@apollo/react-hooks";

import { store } from "@/redux/store";

import "@/styles/globals.css";
import Head from "next/head";
import Sidebar from "@/components/organisms/sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="font-poppins">
        {/* <ApolloProvider client={client}> */}
        <Provider store={store}>
          <div className="flex h-screen">
            <Sidebar />
            <div className="w-full h-[96.5%] overflow-y-auto relative">
              <Component {...pageProps} />
            </div>
          </div>
        </Provider>
        {/* </ApolloProvider> */}
      </div>
    </>
  );
}

export default MyApp;
