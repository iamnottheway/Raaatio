import { Footer } from "./footer";
import { Header } from "./header";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Formation - A very nice noise pattern generator</title>
      </Head>
      <Header textColor="#fff" />
      {children}
      <Footer />
    </>
  );
};
