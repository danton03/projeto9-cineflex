import styled from "styled-components";
const Horarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 22px;
  gap: 10px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0px;

  display: flex;
  align-items: center;
  width: 100%;
  height: 14%;
  max-width: 1366px;
  min-height: 117px;
  padding: 10px;
  gap: 14px;

  background-color: #6595D6;
  border-top: 1px solid #002C69;
  box-sizing: border-box;
`

const Sessions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`

export {Horarios, Sessions, Footer, Descriptions}