import { RenderProvider } from "../context/renderContext";

const Layout = ({ children }) => {
  return <RenderProvider>{children}</RenderProvider>;
};

export default Layout;
