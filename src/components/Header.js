import styled from 'styled-components';
export default function Header() {
  return(
    <Topo>CINEFLEX</Topo>
  );
}

const Topo = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1366px;
  height: 67px;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  background-color: #C3CFD9;
  color:#E8833A;
`;