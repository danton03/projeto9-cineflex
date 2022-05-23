import styled  from "styled-components";

const Assento = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 26px;
  min-height: 25px;

  /* No final tentar passar isso para a função chamada no onClick do componente.
     Tipo fazer toda a lógica lá e só passar a cor como props ou mudar um estado */

  background-color: ${props => props.available ? 
  (props.selected ? "#8DD7CF": "#C3CFD9") 
  : "#FBE192" };

  border: 1px solid ${props => props.available ? 
  (props.selected ? "#1AAE9E": "#808F9D") 
  : "#F7C52B" };

  &:hover{
    cursor: ${props => props.available ? "pointer": "not-allowed"}
  }

  border-radius: 90%;
`

export {Assento};