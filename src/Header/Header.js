import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Logo from "./img/logo.jpg";
import "./Header.css";


const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="#" light expand="md">

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <NavbarBrand href="/">
                        <img src={Logo} alt="Nathi Lup" Class="logoNav" />
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contato</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Produtos
                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    Papelaria
                  </DropdownItem>
                                <DropdownItem>
                                    Dias Comemorativos
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Outros
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
}


export default Headers;