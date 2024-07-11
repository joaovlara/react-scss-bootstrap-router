import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaUmbrellaBeach } from 'react-icons/fa';

const SelectEnvironment = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Col className="d-flex justify-content-center">
        <Card className="d-flex align-items-center justify-content-center card-custom smartly-card border m-2 p-4">
          <FaBriefcase size={50} className="mb-2" />
          <h5>Trabalho</h5>
        </Card>
      </Col>
      <Col className="d-flex justify-content-center">
        <Card className="d-flex align-items-center justify-content-center card-custom hotfloor-card border m-2 p-4">
          <FaUmbrellaBeach size={50} className="mb-2" />
          <h5>Lazer</h5>
        </Card>
      </Col>
    </Container>
  );
};

export default SelectEnvironment;
