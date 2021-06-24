import React from "react";
import {Footer, SignUpForm} from "../components";
import * as ROUTES from "../constants/routes";
import {ButtonLink} from "../components/ui/button";
import HeaderLayout from "../components/Layout/HeaderLayout";
import {Background} from "../components/Header/style";

export default function SignUp() {


  return (
    <>
      <HeaderLayout>
        <ButtonLink to={ROUTES.SIGN_IN}>
          <p>Sign&nbsp;In</p>
        </ButtonLink>
      </HeaderLayout>
      <main>
        <Background>
          <div className='Gradient'>
            <SignUpForm/>
          </div>
        </Background>
      </main>
      <Footer/>
    </>
  )
}