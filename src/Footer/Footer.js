import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4  pl-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Gostou!!!</h5>
            <p>
              Entre em contato conosco e faça seu orçamento.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Home</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Contato</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Quem Somos</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Nossos Produtos</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> Nathi Lupe </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;


