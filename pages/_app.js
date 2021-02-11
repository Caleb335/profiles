import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";

import store from "../src/store";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Awesome Profiles | Home</title>
        <link rel="icon" href="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&family=Ubuntu:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          href="https://avatars.dicebear.com/v2/avataaars/{{seven}}.svg?options[mood][]=happy"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#072a4d" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
