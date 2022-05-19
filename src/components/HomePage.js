import Header from "./Header"
import Title from "./Title"
import styled from "styled-components"

export default function HomePage(){
  return(
    <Container>
      <Header />
      <Title>Selecione o filme</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
