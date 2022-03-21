import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Controls from './Controls';

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
  flex-direction: column;

  display: flex;

  width: 100vw;
  height: 100vh;

  font-family: 'Raleway', sans-serif;

  background-color: rgb(15, 27, 61);
  background-image: url('assets/bg-mobile.png');
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Controls />
      </StyledApp>
    </>
  );
}
