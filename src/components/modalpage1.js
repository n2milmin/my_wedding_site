import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const Modalpage1 = () => {
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
    }

    return (
        <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="form" as={Row} controlId="form.input">
                <Form.Label column sm={3}>Your Name</Form.Label>
                <Form.Control as={Col} type="text"/>
            </Form.Group>
            {Array.from(Array(guests)).map((c, index) => {
                return (
                <Form.Group className="names" as={Row} controlId={"guest." + {index}}>
                    <Form.Label column sm={3}>Guest {index + 1}</Form.Label>
                    <Form.Control as={Col} type="text"/>
                </Form.Group>
                )
            })}
            { guests < 3 && 
            <Button onClick={handleAddGuest} variant="secondary">Add Guest</Button> 
            }
            { guests > 0 &&
            <Button onClick={handleRemoveGuest} variant="secondary">Remove Guest</Button>
            }

            {/* <Form.Group className="attendance" controlId="attendance"> */}
                <Form.Label>Attending</Form.Label>
                <Form.Check type="radio" label="Yes" id="yes"/>
                <Form.Check type="radio" label="No" id="no" />
            {/* </Form.Group> */}
         </Form>
    )
}

export default Modalpage1;