import styled from "styled-components"
export default function Title(props){
  return(
    <Titulo color={props.color}>{props.children}</Titulo>
  );
}

const Titulo = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 106px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: ${props => props.color ? props.color : "#293845"};
  `;

