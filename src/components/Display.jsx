import styled from 'styled-components';

const StyledDisplay = styled.section`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  display: flex;

  box-shadow: 0 25px 100px -30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 326px;
  height: 160px;
  padding: 32px 33px 51px 33px;

  color: rgb(219, 217, 255);

  background-color: rgb(35, 45, 105);

  h1 {
    font-size: 14px;
    font-weight: 400;

    span {
      font-weight: 800;
    }
  }

  section {
    flex-direction: column;

    display: flex;

    progress {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      margin-bottom: 11px;
      border-radius: 10px;
      border-style: none;
      width: 262px;
      height: 20px;
      padding: 4px;

      background-color: rgb(15, 27, 61);

      &::-webkit-progress-value {
        border-radius: 10px;

        background: rgb(255, 74, 149);
        background: linear-gradient(to right, rgb(255, 161, 151), rgb(255, 74, 149));
      }

      &::-webkit-progress-bar {
        border-radius: 10px;

        background-color: rgb(15, 27, 61);
      }

      &::-moz-progress-bar {
        border-radius: 10px;

        background: rgb(255, 74, 149);
        background: linear-gradient(to right, rgb(255, 161, 151), rgb(255, 74, 149));
      }
    }

    article {
      justify-content: space-between;

      display: flex;

      p {
        font-size: 12px;
        font-weight: 800;
      }
    }
  }

  aside {
    position: absolute;
    bottom: 129px;
    justify-content: center;
    align-items: center;

    display: flex;

    box-shadow: 0 25px 100px -30px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 179px;
    height: 72px;

    background-color: rgb(255, 255, 255);

    h1 {
      margin-right: 8px;

      font-size: 40px;
      font-weight: 800;
      color: rgba(25, 18, 44, 1);
    }

    p {
      font-size: 12px;
      font-weight: 800;
      color: rgba(25, 18, 44, 0.5);
    }
  }
`;

export default function Display() {
  const dataPlan = 1000;
  const dataUsed = 815;

  return (
    <StyledDisplay>
      <h1>
        You've used <span>{`${dataUsed} GB`}</span> of your storage
      </h1>
      <section>
        <progress max={dataPlan} value={dataUsed} />
        <article>
          <p>0 GB</p>
          <p>{`${dataPlan} GB`}</p>
        </article>
      </section>
      <aside>
        <h1>{dataPlan - dataUsed}</h1>
        <p>GB LEFT</p>
      </aside>
    </StyledDisplay>
  );
}
