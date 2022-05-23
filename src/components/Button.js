import styled  from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 225px;
  height: 42px;
  margin: ${(props) => props.margin ? props.margin : "0"};

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #FFFFFF;
  background-color: #E8833A;
  border-radius: 3px;
`

export {Button};