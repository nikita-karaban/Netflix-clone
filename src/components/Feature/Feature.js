import React from 'react';
import {Container, Subtitle, Title} from "./style";

function Feature({children}) {
  return (
    <Container>
      <Title>Unlimited movies, TV shows, and more.</Title>
      <Subtitle>Watch anywhere. Cancel at any time.</Subtitle>
      {children}
    </Container>
  );
}

export default Feature;


