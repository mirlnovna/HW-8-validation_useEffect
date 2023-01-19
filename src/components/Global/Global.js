import styled from "styled-components";

export const Conteiner = styled.div`
  border: 2px solid white;
  background-color: #ccc;
  width: 730px;
  height: 260px;
  margin-top: 153px;
  margin-left: 290px;
  border-radius: 19px;
  & .login {
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
    margin-top: -27px;
  }
  & .control {
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  & .control label,
  & .control input {
    display: block;
  }
  & .control label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }
  & .control input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  & .control input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  & .control.invalid input {
    border-color: red;
    background: #fbdada;
  }

  & .actions {
    text-align: center;
  }
`;
export const Styledmain = styled.header`
  & .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #741188;
    padding: 0 2rem;
  }
  & .main-header h1 {
    color: white;
  }
`;
export const Nav = styled.main`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  & li {
    margin: 0;
    margin-left: 2rem;
    margin-bottom: 100px;
  }

  & button {
    font: inherit;
    background: #dd0db0;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }
`;
export const StyledTimer = styled.div`
  margin-left: 500px;
  margin-top: 200px;
`;
