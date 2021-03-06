import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Controls from './Controls';
import Display from './Display';

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

  @media screen and (min-width: 1440px) {
    flex-direction: row;

    background-image: url('assets/bg-desktop.png');
    background-size: 100vw 35vw;
    background-position: 0px 50vh;
    background-repeat: no-repeat;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Controls />
        <Display />
      </StyledApp>
    </>
  );
}
