import Header from "./Header"
import Title from "./Title"
import { Container, Filmes, CardFilme } from "../styles/HomePageStyles";
import axios from "axios";
import { useState,useEffect } from "react";

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
       {items.map((item) => 
        <CardFilme key={item.id}>
          <img src={item.posterURL} alt={item.title} />
        </CardFilme>)}
      </Filmes>
    </Container>
  )
}
