import { RenderProvider } from "../context/renderContext";
import { ExportProvider } from "../context/exportContext";
import styled from "styled-components";

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

const Header = styled.div`
  width: 100%;
  height: auto;
  min-height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #000000;
  box-shadow: 0px 10px 0px rgba(49, 46, 205, 0.21);
  padding: 10px;
  margin: 0 auto;
  z-index: 10;
`;

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
