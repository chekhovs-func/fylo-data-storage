import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
`;

const StyledApp = styled.main`
  justify-content: center;
  align-items: center;

  display: flex;

  width: 100vw;
  height: 100vh;

  font-family: 'Raleway', sans-serif;

  background-color: #0c122c;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
      </StyledApp>
    </>
  );
}
