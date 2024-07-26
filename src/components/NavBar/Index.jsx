import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <img alt="" src="/img/logo.svg" width="30" height="30" className="d-inline-block" />
                <FaUser />
                <Navbar.Brand as={Link} to="/main">User</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/main/searchUser">Buscar Usuário</Nav.Link>
                        <Nav.Link as={Link} to="/main/searchDevice">Buscar Dispositivo</Nav.Link>
                        <Nav.Link as={Link} to="/main/support">Suporte</Nav.Link>
                        <Nav.Link as={Link} to="/main/register">Cadastrar</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/main/help">Ajuda</Nav.Link>
                        <Nav.Link as={Link} to="/main/support">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
