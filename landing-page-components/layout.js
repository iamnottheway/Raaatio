import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      {/* <Header textColor="#fff" /> */}
      {children}
      <Footer />
    </>
  );
};
