import {Accordion, Feature, Footer, Header, MainItems, OptForm} from "../components";

function Home() {
  return (
    <>
      <Header>
        <Feature>
          <OptForm/>
        </Feature>
      </Header>
      <MainItems/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default Home;
