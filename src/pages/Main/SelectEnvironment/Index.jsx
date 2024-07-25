import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';

export default function SelectEnvironment() {

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Col className="d-flex justify-content-center">
        <Button>Trabalho</Button>
      </Col>
      <Col>
        <Button>Lazer</Button>
      </Col>
    </Container>
  );
};
