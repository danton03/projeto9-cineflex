import styled from "styled-components"
export default function Title(props){
  return(
    <Titulo 
      color={props.color} 
      size={props.size}
      marginTop={props.marginTop}
    >
      {props.children}
    </Titulo>
  );
}

const Titulo = styled.h2`
  display: flex;
  align-items: center;
  margin-top: ${props => props.marginTop ? props.marginTop : "106px"};
  font-weight: 400;
  font-size: ${props => props.size ? props.size : "24px"};
  line-height: 28px;
  letter-spacing: 0.04em;
  color: ${props => props.color ? props.color : "#293845"};
  `;

