/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container } from 'reactstrap';
import "./Article.css";


const Article = (props) => {
  return (
    <div>
      <Container fluid>
        <div class="col-md-12 text-center bg-white my-5">
          <h1 class="display-4 letraH1"> Eu sou a Nathi </h1>
          <h1 class="display-4 letraH1 mt-3"> Tenho 33 anos trabalho com papelaria criativa.</h1>
          <h1 class="display-4 letraH1 mt-3"> Sou mãe da Luiza e Pedro.</h1>
        </div>
      </Container >
    </div >
  );
};

export default Article;