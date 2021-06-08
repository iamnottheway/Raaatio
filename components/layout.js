import { RenderProvider } from "../context/renderContext";
import { ExportProvider } from "../context/exportContext";
import styled from "styled-components";
import { Header } from "./header";

const Layout = ({ children }) => {
  return (
    <RenderProvider>
      <ExportProvider>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </ExportProvider>
    </RenderProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5eff5;
  background-repeat: repeat;
  background-image: url("/static/grid.svg");

  @media (max-width: 800px) {
    padding: 100px 0px;
    height: auto;
  }
`;

export default Layout;
