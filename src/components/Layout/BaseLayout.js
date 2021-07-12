import React from 'react';
import {Footer, Header} from "../index";

function BaseLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default BaseLayout;