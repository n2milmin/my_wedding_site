import "./RSVP.css";
import { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

const RSVP = () => {
  const [show, setShow] = useState(false);

  const [validated, setValidated] = useState(false);
  const [guests, setGuests] = useState(0);

  const handleAddGuest = () => setGuests(guests + 1);
  const handleRemoveGuest = () => setGuests(guests - 1);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  } // Make sure they know data isn't saved

  return (
    <div>
      <h2>RSVP</h2>

      <div className="content">
        <p>You will only be able to complete the form ONCE. Please reach out if you must change any information.</p>
        <p>Clicking Cancel will save your information only until the page is refreshed.</p>

        <Button variant="primary" size="lg" onClick={handleShow}>RSVP</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>RSVP</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="mb-2" controlId="name.input">
              <InputGroup hasValidation>
                <Form.Control required type="text" placeholder="Your Name" />
                <Form.Control.Feedback type="invalid">Name not found.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            {/* Additional guests (partners / children) */}
            {Array.from(Array(guests)).map((c, index) => {
              return (
                <Form.Group className="mb-2" controlId={"guest." + { index }}>
                  <Form.Control required type="text" placeholder="Guest Name"/>
                  <Form.Control.Feedback type="invalid">Please enter name or remove guest.</Form.Control.Feedback>
                </Form.Group>
              )
            })}
            <Form.Group className="mb-4 d-flex gap-2">
              {/* Display add & remove guest buttons */}
              {guests < 3 &&
                <Button onClick={handleAddGuest} variant="secondary">Add Guest</Button>
              }
              {guests > 0 &&
                <Button onClick={handleRemoveGuest} variant="secondary">Remove Guest</Button>
              }
            </Form.Group>

            {/* Attending radio btn */}
            <Form.Group className="mb-4" controlId="attendance.radio">
                <Form.Label>Will you be attending?</Form.Label> <br />
                <Form.Check name="attending" required inline type="radio" label="Yes"/>
                <Form.Check name="attending" required inline type="radio" label="No"/>
            </Form.Group>

            {/* Meal Preference */}

            {/* Dietary Restrictions */}
            <Form.Group className="mb-4" controlId="dietary.input">
              <Form.Label>Are there any dietary restrictions or allergies?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            {/* Song Request */}
            <Form.Group className="mb-5" controlId="songrequest.input">
              <Form.Label>Do you have a song request?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default RSVP;