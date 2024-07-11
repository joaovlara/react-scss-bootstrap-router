import React, { useState } from 'react';
import { Container, Col, Button } from 'react-bootstrap';

const SelectEnvironment = ({ onSelectEnvironment }) => {
  const [ambiente, setAmbiente] = useState('');

  const handleButtonClick = (value) => {
    setAmbiente(value);
    console.log(`Ambiente selecionado: ${value}`);
    onSelectEnvironment(value);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Col className="d-flex justify-content-center">
        <Button onClick={() => handleButtonClick('Trabalho')}>Trabalho</Button>
      </Col>
      <Col className="d-flex justify-content-center">
        <Button onClick={() => handleButtonClick('Lazer')}>Lazer</Button>
      </Col>
    </Container>
  );
};

export default SelectEnvironment;
