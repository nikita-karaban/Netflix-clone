import React from "react";
import mainData from '../../fixtures/mainItems.json'
import {Image, Inner, MainSection, Pane, Subtitle, Title} from "./style";


export default function MainItems() {
  return (
    < >
      {mainData.map(item => (
        <MainSection key={item.id}>
          <Inner direction={item.direction}>
            <Pane>
              <Title>{item.title}</Title>
              <Subtitle>{item.subTitle}</Subtitle>
            </Pane>
            <Pane>
              <Image src={item.image} alt={item.alt}/>
            </Pane>
          </Inner>
        </MainSection>
      ))}
    </>
  )
}

