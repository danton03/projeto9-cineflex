import styled from "styled-components";
const PosterFilme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 7vh;
  min-width: 64px;
  min-height: 89px;
  

  background-color: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-sizing: border-box;

  img{
    height: 80%;
    width: 80%;
  }

  @media (min-width: 1000px){
    width: 4%;
  }
`;

export {PosterFilme}