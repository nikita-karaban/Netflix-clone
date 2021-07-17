import React from 'react';
import {Column, Container, Link, Row, Text, Title} from "./style";

export default function Footer(props) {
  return (
    <Container>
      <Title>Questions? Contact us.</Title>
      <Row>
        <Column>
          <Link className='disabled-link'><span>FAQ</span></Link>
          <Link className='disabled-link' to={'#'}><span>Investor Relations</span></Link>
          <Link  className='disabled-link' to={'#'}><span>Privacy</span></Link>
          <Link className='disabled-link' to={'#'}><span>Speed Test</span></Link>
        </Column>
        <Column>
          <Link className='disabled-link' to={'#'}><span>Help Center</span></Link>
          <Link className='disabled-link' to={'#'}><span>Cookie Preferences</span>x</Link>
          <Link className='disabled-link' to={'#'}><span>Cookie Preferences</span></Link>
          <Link className='disabled-link' to={'#'}><span>Legal Notices</span></Link>
        </Column>
        <Column>
          <Link className='disabled-link' to={'#'}><span>Account</span></Link>
          <Link className='disabled-link' to={'#'}><span>Ways to Watch</span></Link>
          <Link className='disabled-link' to={'#'}><span>Corporate Information</span></Link>
          <Link className='disabled-link' to={'#'}><span>Netflix Originals</span></Link>
        </Column>
        <Column>
          <Link className='disabled-link' to={'#'}><span>Media Center</span></Link>
          <Link className='disabled-link' to={'#'}><span>Terms of Use</span></Link>
          <Link className='disabled-link' to={'#'}><span>Contact Us</span></Link>
        </Column>
      </Row>
      <Text><span>Netflix Belarus</span></Text>
    </Container>
  );
}

