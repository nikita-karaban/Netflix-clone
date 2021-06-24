import React, {useState} from 'react';
import { Container, Input, Text} from "./style";
import {ButtonLink} from "../ui/button";

export default function OptForm(props) {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Text>Ready to watch? Enter your email to create or restart your
        membership.</Text>
      <Input placeholder='Email address' type='email' value={email} onChange={
        (e) => setEmail(e.target.value)
      }/>
      <ButtonLink fontSize={`26px`}>Get Starter
        <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="#fff">
          </path>
        </svg>
      </ButtonLink>
    </Container>
  );
}


