import styled from "styled-components";

const Filmes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  padding: 0 8px;
  gap: 40px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
`

const CardFilme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 20%;
  min-width: 145px;
  min-height: 209px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img{
    height: 90%;
    width: 90%;
  }

  img:hover{
    cursor: pointer;
  }
`;

export{Filmes, CardFilme}