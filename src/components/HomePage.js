import Header from "./Header"
import {Title} from "./Title"
import { Filmes, CardFilme } from "../styles/HomePageStyles";
import { Container } from "../styles/ContainerStyles";

import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage(){

  const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    .then(resposta => {
			setItems(resposta.data);
		})//tratar melhor o erro depois
    .catch(() => console.log("Erro na requisição") )
	}, []);

  return(
    <Container>
      <Header />
      <Title>Selecione o filme</Title>
      <Filmes>
        {/* Fazer o map passando as props aqui */}
       {items.map((filme) => 
          <Link to={`/sessoes/${filme.id}`} key={filme.id}>
            <CardFilme>
              <img src={filme.posterURL} alt={filme.title} />
            </CardFilme>
          </Link>
        )}
      </Filmes>
    </Container>
  )
}
