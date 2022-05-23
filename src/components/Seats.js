/* Importações de funções das dependências */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Importações de componentes */
import Header from "./Header";
import {Title} from "./Title";
import { Container } from "../styles/ContainerStyles";
import { PosterFilme } from "./PosterFilme";
import { Descriptions, Footer } from "../styles/SessionTimesStyles";
import { Assentos } from "../styles/SeatsStyles";
import Seat from "./Seat";
import Legenda from "./Legenda";
import Checkout from "./Checkout";


export default function Seats() {
  const {idSessao} = useParams();
  const [session, setSession] = useState({});

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    promise.then((response)=>{setSession({...response.data})});
  }, [idSessao]);


  return(
    session.name? 
    (
      <Container>

        <Header />

        <Container margin={"67px 0 117px 0"} >
          <Title marginTop={"28px"} >{"Selecione o(s) assento(s)"}</Title>

          <Assentos>
            {session.seats.map(seat => 
              <Seat 
              key={seat.id}
              available={seat.isAvailable}
              >
                {seat.name}
              </Seat>
            )}
          </Assentos>

          <Legenda />
          <Checkout />
        </Container>

        <Footer>
          <PosterFilme>
            <img src={session.movie.posterURL} alt="Capa" />
          </PosterFilme>

          <Descriptions>
            <Title 
              color={"#001636"} 
              marginTop={"0"} 
              size={"26px"}>
              {session.movie.title}
            </Title>

            <Title 
              color={"#001636"} 
              marginTop={"0"} 
              size={"26px"}>
              {session.day.weekday} - {session.name}
            </Title>
          </Descriptions>

        </Footer> 
      </Container>
    )
    : ""
  );
}
