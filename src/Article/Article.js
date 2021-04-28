/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./Article.css";


const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;