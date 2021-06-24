import React from 'react';
import * as ROUTES from "../../constants/routes";
// import {Avatar, Container, Logo} from "../Header/style";
import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import './style/HeaderLayout.scss'

function HeaderLayout({children}) {
  return (

    // <Container position={`absolute`} style={{
    //   width: `88%`
    // }} >
    //   <Link to={ROUTES.HOME}>
    //     <Logo src={logo} alt={'Netflix'}/>
    //   </Link>
    //   <Link>
    //     <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
    //   </Link>
    // </Container>

    <header className={`header`}>
      <Link to={ROUTES.HOME}>
        <img className={`Logo`} src={logo} alt={'Netflix'}/>
      </Link>
      {children}
    </header>

  );
}

export default HeaderLayout;