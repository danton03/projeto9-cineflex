import { Link } from 'react-router-dom';
import { Topo } from '../styles/HeaderStyles';

export default function Header() {
  return(
    <Topo>
      <Link to={"/"}>CINEFLEX</Link>
    </Topo>
  );
}

