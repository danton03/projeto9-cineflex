import styled from "styled-components";

const StyledInput = styled.input`
  width: 327px;
  height: 51px;
  margin-bottom: 16px;
  padding: 0 4px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  background-color: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 3px;
  box-sizing: border-box;

  @media (max-width: 327px) {
    width: 96%;
    height: 40px;
  }
`

export {StyledInput};