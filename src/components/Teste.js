import styled  from "styled-components";
import { Container } from "../styles/ContainerStyles";
import Header from "./Header";
import Seat from "./Seat";
import Title from "./Title";

export default function Teste(){


  return(
    <Container>
      <Header />
      <Title>Selecione o filme</Title>
      <Seat />
      <ContainerCheckout>
        <Label htmlFor="nome">Nome do comprador:</Label>
        <Input name="nome" placeholder="Digite seu nome..." />
        <Label htmlFor="cpf" >CPF do comprador:</Label>
        <Input name="nome" placeholder="Digite seu CPF..."/>
      </ContainerCheckout>
    </Container>
  )
}

const ContainerCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  color: #293845;
`

const Input = styled.input`
  width: 327px;
  height: 51px;
  margin-bottom: 16px;

  background-color: #FFFFFF;
  color: #AFAFAF;
  border: 1px solid #D5D5D5;
  border-radius: 3px;

  @media (max-width: 327px) {
    width: 96%;
    height: 40px;
  }
`