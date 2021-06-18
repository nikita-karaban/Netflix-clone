import React from 'react';
import {Container} from "./style";

function Form({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Form;

