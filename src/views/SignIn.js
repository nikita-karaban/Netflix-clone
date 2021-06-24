import React from "react";
import { Footer,  SignInForm} from "../components";
import * as ROUTES from "../constants/routes";
import HeaderLayout from "../components/Layout/HeaderLayout";
import {Background} from "../components/Header/style";
import {ButtonLink} from "../components/ui/button";

export default function SignIn() {


  return (
    <>
      <HeaderLayout>
        <ButtonLink to={ROUTES.SIGN_UP}>
          <p>Sign&nbsp;Up</p>
        </ButtonLink>
      </HeaderLayout>
      <main>
        <Background>
          <div className='Gradient'>
            <SignInForm/>
          </div>
        </Background>
      </main>
      <Footer/>
    </>
  )
}

