import React from 'react';
import { Button } from 'reactstrap';
import Headers from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer';
import Article from './Article/Article';
import Section1 from './Section/Section1';

function App(props) {
  return (
    <div>
      <Headers />
      <Banner />
      <Article />
      <Section1 />

    </div>
  );
};


export default App;
