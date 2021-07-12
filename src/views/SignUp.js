import React from "react";
import { SignUpForm} from "../components";
import {Background} from "../components/Header/style/style";
import BaseLayout from "../components/Layout/BaseLayout";

export default function SignUp() {


  return (
    <BaseLayout>
      <main>
        <Background>
          <div className='Gradient'>
            <SignUpForm/>
          </div>
        </Background>
      </main>
    </BaseLayout>
  )
}