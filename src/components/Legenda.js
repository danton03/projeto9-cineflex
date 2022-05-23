import { Container } from "../styles/ContainerStyles";
import { Indicators } from "../styles/SeatsStyles";
import { Assento } from "./Assento";
import {Title} from "./Title";

export default function Legenda() {
  return (
    <Indicators>
      <Container>
        <Assento 
        available={true} 
        selected={true}
        >
        </Assento>

        <Title 
        color={"#4E5A65"} 
        size={"13px"}
        marginTop={"4px"} 
        >
          Selecionado
        </Title>
      </Container>

      <Container>
        <Assento 
        available={true} 
        selected={false}
        >
        </Assento>

        <Title 
        color={"#4E5A65"} 
        size={"13px"}
        marginTop={"4px"} 
        >
          Disponível
        </Title>
      </Container>

      <Container>
        <Assento 
        available={false} 
        selected={false}
        >
        </Assento>

        <Title 
        color={"#4E5A65"} 
        size={"13px"}
        marginTop={"4px"} 
        >
          Indisponível
        </Title>
      </Container>
    </Indicators>
  );
}