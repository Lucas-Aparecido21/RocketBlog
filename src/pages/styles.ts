import styled from "styled-components";

export const MainHeader = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme["--background-header"]};
`;

export const DivHeader = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  background-color: ${(props) => props.theme["--background-header"]};
`;

export const DivTitle = styled.div`
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 42px;
    color: ${(prosp) => prosp.theme["--white"]};
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  button {
    all: unset;
    cursor: pointer;
    height: 25px;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    color: white;
    border-left: 1px solid transparent;
    padding: 0 2px;
  }

  button:hover {
    border-left: 2px solid #4fff4b;
    transition: 0.4s;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.theme["--dark-bg"]};
    border: none;
    border-radius: 5px;
    ::placeholder {
      color: #fff;
      font-size: 14px;
    }
  }

  button {
    width: 100px;
    height: 50px;
    border-radius: 5px;
  }
`;
