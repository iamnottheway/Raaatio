import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  html,body {
    height: 100%;
    margin: 0px !important;
    padding: 0;
  }

  #__next{
    height: 100%;
    margin:0;
  }
  
  * {
    box-sizing: border-box;
  }

`;

function App({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
