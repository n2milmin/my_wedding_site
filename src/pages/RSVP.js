import { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import Modalpage1 from "../components/modalpage1";

const RSVP = () => {
  const [show, setShow] = useState(false);
  // const [validated, setValidated] = useState(false);
  // const [guests, setGuests] = useState(0);
  
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    // setGuests(0)
  } // Make sure they know data isn't saved

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <div>
      <h2>RSVP</h2>

      <Button variant="primary" onClick={ handleShow }>Open</Button>

      <Modal 
        show={show}
        onHide={ handleClose }
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>RSVP</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Modalpage1 />
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RSVP;

/*
// Toasts for success
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowB} className="mb-2">
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;
*/