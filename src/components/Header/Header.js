import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import {Avatar, Background, ButtonLink, Container, Logo} from "./style";
import {Link, Route, useHistory} from "react-router-dom";
// import SearchLogo from '../../static/images/search-icon.svg'
import * as ROUTES from "../../constants/routes";
import { withRouter } from 'react-router-dom';



function Header({bg = true, children}) {
  // const [userInput, setUserInput] = useState('');
  // let history = useHistory();



  // const onChange = async (event) => {
  //   await setUserInput(event.target.value)
  //   // console.log(userInput)
  //   await makeAipCall(userInput)
  // }
  //
  // let makeAipCall = async (searchItem) => {
  //   if (typeof searchItem === 'undefined') return
  //   console.log(searchItem)
  //   const response = await axios.get(fetchSearchItem(searchItem));
  //   const results = await response.data.results;
  //   console.log(results)
  //
  //   history.push({
  //     movieRows: await results,
  //     pathname: '/search',
  //     userInput:  searchItem
  //
  //   });
  //   // console.log(history)
  // }
  //
  //
  // useEffect(() => {
  //   makeAipCall(userInput);
  // }, [userInput]);


  return (<>

      <Route exact path={[ROUTES.HOME, ROUTES.SIGN_UP, ROUTES.SIGN_IN]}>
        {bg ? <Background>
          <div className='Gradient'>
          </div>
          <Container>
            <Link to={ROUTES.HOME}>
              <Logo src={logo} alt={'Netflix'}/>
            </Link>
            <Route exact path={[ROUTES.HOME, ROUTES.SIGN_UP]}>
              <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
              <ButtonLink to={ROUTES.SIGN_UP}>Sign&nbsp;Up</ButtonLink>
            </Route>
          </Container>
          {children}
        </Background> : children
        }
      </Route>
      <Route exact path={[ROUTES.BROWSE, ROUTES.MOVIE_ID, ROUTES.SEARCH]} >
        <Container position={`absolute`} style={{
          width: `88%`
        }} >
          <Link to={ROUTES.HOME}>
            <Logo src={logo} alt={'Netflix'}/>
          </Link>
          {/*<div>*/}
          {/*  /!*<SearchLogo/>*!/*/}
          {/*  <input*/}
          {/*    value={userInput}*/}
          {/*    onChange={onChange}*/}
          {/*    className="navigation__container--left__input"*/}
          {/*    type="text"*/}
          {/*    placeholder="Title, genres, people"*/}
          {/*  />*/}
          {/*</div>*/}
          <Link>
            <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
          </Link>
        </Container>
      </Route>
    </>

  );
}

export default withRouter(Header);




