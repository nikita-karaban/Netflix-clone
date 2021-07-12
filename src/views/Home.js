import {Accordion, Feature, MainItems, OptForm} from "../components";
import {Background} from "../components/Header/style/style";
import BaseLayout from "../components/Layout/BaseLayout";

function Home() {
  return (
    <BaseLayout>
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
    </BaseLayout>
  );
}

export default Home;
