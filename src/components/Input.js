import { useState } from "react";
import { StyledInput } from "../styles/InputStyles";

export default function Input (props) {
  const [value,setValue] = useState('');
  console.log(value);
  return(
    <StyledInput
    id={props.id} 
    value={value} 
    placeholder={props.placeholder} 
    onChange={(e) => setValue(e.target.value)} />
  );
}
