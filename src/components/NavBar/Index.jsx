import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser } from "react-icons/fa6";

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <img alt="" src="/img/logo.svg" width="30" height="30" className="d-inline-block" />
                <FaUser />
                <Navbar.Brand href="#home">User</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >Buscar Usuário</Nav.Link>
                        <Nav.Link >Buscar Dispositivo</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Ajuda</Nav.Link>
                        <Nav.Link>Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
