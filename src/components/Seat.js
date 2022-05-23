import { useState } from "react";
import { Assento } from "./Assento";

export default function Seat(props) {
  const [selected, setSelected] = useState(false);

  function handleSelect(isAvailable){
    if (isAvailable) {
      setSelected(!selected);
    }
  }

  return(
      <Assento 
        available={props.available} 
        selected={selected}
        onClick={() => handleSelect(props.available)}>
          {props.children}
      </Assento>
  );
}


/* To-Do: Fazer uma verificação no onClick com if para saber se o assento
          está disponível e se não está selecionado. Se for tudo verdadeiro,
          muda o estado de selected. Senão, dá um return sem nada pra evitar
          cliques indesejados.
*/