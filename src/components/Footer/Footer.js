import React from 'react';
import {Column, Container, Link, Row, Text, Title} from "./style";

export default function Footer(props) {
  return (
    <Container>
      <Title>Questions? Contact us.</Title>
      <Row>
        <Column>
          <Link><span>FAQ</span></Link>
          <Link><span>Investor Relations</span></Link>
          <Link><span>Privacy</span></Link>
          <Link><span>Speed Test</span></Link>
        </Column>
        <Column>
          <Link><span>Help Center</span></Link>
          <Link><span>Cookie Preferences</span>x</Link>
          <Link><span>Cookie Preferences</span></Link>
          <Link><span>Legal Notices</span></Link>
        </Column>
        <Column>
          <Link><span>Account</span></Link>
          <Link><span>Ways to Watch</span></Link>
          <Link><span>Corporate Information</span></Link>
          <Link><span>Netflix Originals</span></Link>
        </Column>
        <Column>
          <Link><span>Media Center</span></Link>
          <Link><span>Terms of Use</span></Link>
          <Link><span>Contact Us</span></Link>
        </Column>
      </Row>
      <Text><span>Netflix Belarus</span></Text>
    </Container>
  );
}

