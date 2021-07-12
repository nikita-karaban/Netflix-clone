import React from "react";
import {SignInForm} from "../components";
import {Background} from "../components/Header/style/style";
import BaseLayout from "../components/Layout/BaseLayout";

export default function SignIn() {


  return (
    <BaseLayout>
      <main>
        <Background>
          <div className='Gradient'>
            <SignInForm/>
          </div>
        </Background>
      </main>
    </BaseLayout>
  )
}

