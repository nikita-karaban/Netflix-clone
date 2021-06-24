import React from 'react';
import {Link,Text, TextSmall, Title} from "../Form/style";
import * as ROUTES from "../../constants/routes";

function AuthForm(props) {


  return (
    <>
      <Title>{props.title}</Title>
      {props.children}
      {props.title === `Sign In`?
        <Text>New to Netflix <Link to={ROUTES.SIGN_UP}>Sign up now</Link></Text> :
        <Text>Already a user? <Link to={ROUTES.SIGN_IN}>Sign in now.</Link></Text>}
      <TextSmall><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span></TextSmall>
    </>
  );
}

export default AuthForm;