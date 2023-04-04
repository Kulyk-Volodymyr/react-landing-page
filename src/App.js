import React from "react";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Offers from './components/offers/Offers';
import About from './components/about/About';
import Team from './components/team/Team';
import Questions from './components/questions/Questions';
import Contacts from './components/contacts/Contacts';
 
function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Features />
        <Offers />
        <About />
        <Team />
        <Questions />
        <Contacts />
      </main>
    </>
  );
}

export default App;
