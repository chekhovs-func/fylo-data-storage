import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as DocumentIcon } from '../assets/icon-document.svg';
import { ReactComponent as FolderIcon } from '../assets/icon-folder.svg';
import { ReactComponent as UploadIcon } from '../assets/icon-upload.svg';

const StyledControls = styled.section`
  box-shadow: 0 25px 100px -30px rgba(0, 0, 0, 0.25);
  border-radius: 10px 100px 10px 10px;
  margin-bottom: 16px;
  width: 326px;
  height: 201px;
  padding: 40px 41px;

  background-color: rgb(35, 45, 105);

  .logo {
    margin-bottom: 33px;
  }

  .buttons {
    justify-content: space-between;

    display: flex;

    width: 176px;

    button {
      justify-content: center;
      align-items: center;

      display: flex;

      border-style: none;
      border-radius: 10px;
      width: 48px;
      height: 48px;

      background-color: rgb(12, 18, 44);

      cursor: pointer;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 30px;
  }
`;

export default function Controls() {
  return (
    <StyledControls>
      <Logo className='logo' />
      <article className='buttons'>
        <button>
          <DocumentIcon />
        </button>
        <button>
          <FolderIcon />
        </button>
        <button>
          <UploadIcon />
        </button>
      </article>
    </StyledControls>
  );
}
