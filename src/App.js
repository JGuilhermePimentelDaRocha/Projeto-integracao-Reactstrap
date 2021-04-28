import React from 'react';
import { Button } from 'reactstrap';
import Headers from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer';
import Article from './Article/Article';

function App(props) {
  return (
    <div>
      <Headers />
      <Banner />
      <Article />

    </div>
  );
};


export default App;
