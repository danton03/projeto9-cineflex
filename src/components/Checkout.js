import { ContainerCheckout, Label } from "../styles/SeatsStyles";
import Input  from "./Input.js";
import { Button } from "./Button";
import { Form } from "../styles/CheckoutStyles";

export default function Checkout() {
  //To-do: Pegar os dados dos inputs (como?)
  function handleSubmit(){
    console.log()
  }

  return(
    <Form onSubmit={handleSubmit()}>
      <ContainerCheckout>
          <Label htmlFor="nome">Nome do comprador:</Label>
          <Input id="nome" placeholder="Digite seu nome..." required />
          <Label htmlFor="cpf" >CPF do comprador:</Label>
          <Input id="cpf" placeholder="Digite seu CPF..." required />
      </ContainerCheckout>
      <Button margin={"57px 0 30px 0"}>Reservar assento(s)</Button>
    </Form>
  );
}