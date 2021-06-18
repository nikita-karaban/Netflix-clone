import React from "react";
import faqsData from '../../fixtures/faqs.json';
import {AccordionItem} from "../AccordionItem/AccordionItem";
import OptForm from "../opt-form/opt-form";
import {Container, Frame, Inner, Title} from "./style";

export default function Accordion() {
  return (
    <Container>
      <Inner>
        <Title>Frequently Asked Questions</Title>
        <Frame>
          {faqsData.map((item) => (
            <AccordionItem key={item.id} title={item.header} body={item.body} />
          ))}
        </Frame>
        <OptForm/>
      </Inner>
    </Container>
  )
}
