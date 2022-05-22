//Importações de funções das dependências instaladas
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Importações de componentes e estilos
import Header from "./Header";
import Title from "./Title";
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
    promise.then((response)=>{setFilme(response.data)});
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
              <Horario key={horario.id}>
                {horario.name}
              </Horario>
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

          {/* Esse Segundo title é para a tela 3 */}
          {/* <Title 
            color={"#001636"} 
            marginTop={"0"} 
            size={"26px"}>
            Quinta-feira - 15:00
          </Title> */}
        </Descriptions>

      </Footer>

    </Container>
  );
}

/* <Link to={`/sessoes/${filme.id}`} key={filme.id}>
            <CardFilme>
              <img src={filme.posterURL} alt={filme.title} />
            </CardFilme>
          </Link> */