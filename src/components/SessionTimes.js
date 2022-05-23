//Importações de funções das dependências instaladas
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Importações de componentes e estilos
import Header from "./Header";
import {Title} from "./Title";
import { Horario } from "./Horario";
import { PosterFilme } from "./PosterFilme";
import { Session } from "./Session";
import { Container } from "../styles/ContainerStyles";
import { Descriptions, Footer, Horarios, Sessions } from "../styles/SessionTimesStyles";
import axios from 'axios';

export default function SessionTimes() {
  const {idFilme} = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    promise.then((response)=>{setFilme({...response.data})});
  }, [idFilme]);

  //console.log(filme);

  return (
    <Container>
      <Header />

      <Title>Selecione o horário</Title>

      <Sessions>
        {filme.days ? 
          filme.days.map((dia) =>
          <Session key={dia.id}>
            <h3>{dia.weekday} - {dia.date}</h3>
            {<Horarios>

              {dia.showtimes.map((horario) =>
              <Link to={`/assentos/${horario.id}`} key={horario.id}>
                <Horario key={horario.id}>
                  {horario.name}
                </Horario>
              </Link>
              )}

            </Horarios>}
          </Session>
          )
        : ""}
      </Sessions>

      <Footer>
        <PosterFilme>
          <img src={filme.posterURL} alt="Capa" />
        </PosterFilme>

        <Descriptions>
          <Title 
            color={"#001636"} 
            marginTop={"0"} 
            size={"26px"}>
            {filme.title}
          </Title>
        </Descriptions>

      </Footer>

    </Container>
  );
}
