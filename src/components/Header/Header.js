import React from 'react';
import * as ROUTES from "../../constants/routes";
// import {Avatar, Container, Logo} from "../Header/style";
import {Link, Route} from "react-router-dom";
import logo from "../../logo.svg";
import './style/HeaderLayout.scss'
import {ButtonLink} from "../ui/button";
import {Avatar} from "./style/style";

function Header() {
  return (

    <header className={`header`}>
      <Link to={ROUTES.HOME}>
        <img className={`Logo`} src={logo} alt={'Netflix'}/>
      </Link>
      <Route exact path={[ROUTES.SIGN_IN, ROUTES.HOME]} >
        <ButtonLink to={ROUTES.SIGN_UP}>
          <p>Sign&nbsp;Up</p>
        </ButtonLink>
      </Route>
      <Route exact path={ROUTES.SIGN_UP} >
        <ButtonLink to={ROUTES.SIGN_IN}>
          <p>Sign&nbsp;In</p>
        </ButtonLink>
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
      </Route>
    </header>
  );
}

export default Header;