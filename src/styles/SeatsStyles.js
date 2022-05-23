import styled  from "styled-components";

const Assentos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 96%;
  max-width: 360px;
  height: auto;
  margin-top: 26px;
  margin-bottom: 20px;
  gap: 7px;
`;

const ContainerCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  color: #293845;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 96%;
  max-width: 360px;
  margin-bottom: 41px;
`

export {Assentos, ContainerCheckout, Label, Indicators};