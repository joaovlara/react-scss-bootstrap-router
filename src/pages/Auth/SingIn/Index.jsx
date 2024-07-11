import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Card } from 'react-bootstrap';

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="justify-content-center w-100">
        <Col md="8" lg="6">
          <Card className="shadow">
            <Row>
              <Col md="6" className="bg-primary text-white d-flex align-items-center justify-content-center">
                <div className="p-4">
                  <h2>Bem-vindo!</h2>
                  <p>Acesse sua conta para continuar</p>
                </div>
              </Col>
              <Col md="6" className="p-4">
                <h2 className="text-center">Login</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Link 
                  to="/selectEnvironment" 
                  className="btn btn-primary my-3 w-100">
                    Login
                  </Link>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingIn;
