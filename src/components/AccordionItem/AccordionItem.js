import React, {useState} from "react";
import {Body, Header, Item} from "./style";


export function AccordionItem({title, body}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <Item>
      <Header onClick={() => setIsActive(!isActive)}>
        {title}
        <div >{isActive ?
          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon-thin-x svg-open" focusable="true">
            <path
              d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
            </path>
          </svg> :
          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon-thin-x svg-closed" focusable="true">
            <path
              d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
            </path>
          </svg>}</div>
      </Header>
      {isActive && <Body>{body}</Body>}
    </Item>
  )
}

