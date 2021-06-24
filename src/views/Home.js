import {Accordion, Feature, Footer, MainItems, OptForm} from "../components";
import HeaderLayout from "../components/Layout/HeaderLayout";
import * as ROUTES from "../constants/routes";
import {ButtonLink} from "../components/ui/button";
import {Background} from "../components/Header/style";

function Home() {
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
            <Feature>
              <OptForm/>
            </Feature>
          </div>
        </Background>
        <MainItems/>
        <Accordion/>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
