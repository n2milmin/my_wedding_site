import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

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
    };

    return (
        <Form /* noValidate */ validated={validated} onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="name" as={Row} controlId="name.input">
                <Form.Label column sm={3}>Your Name</Form.Label>
                <Col sm={9}>
                    <Form.Control required type="text"/>
                </Col>
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                {/* <FormCheckInput id="name" type="text" /> */}
            </Form.Group>

            {/* Additional guests (partners / children) */}
            {Array.from(Array(guests)).map((c, index) => {
                return (
                <Form.Group className="guests" as={Row} controlId={"guest." + {index}}>
                    <Form.Label column sm={3}>Guest {index + 1}</Form.Label>
                    <Form.Control as={Col} type="text"/>
                </Form.Group>
                )
            })}
            {/* Display add & remove guest buttons */}
            { guests < 3 && 
            <Button onClick={handleAddGuest} variant="secondary">Add Guest</Button> 
            }
            { guests > 0 &&
            <Button onClick={handleRemoveGuest} variant="secondary">Remove Guest</Button>
            }

            <br/><br/>

            {/* Attending radio btn */}
            <Form.Group className="attendance" controlId="attendance.radio">
                <Form.Label>Will you be attending?</Form.Label> <br/>
                <Form.Check inline type="radio" label="Yes" id="yes"/>
                <Form.Check inline type="radio" label="No" id="no" />
            </Form.Group>
            
            <br/>
            {/* Meal Preference */}

            {/* Dietary Restrictions */}
            <Form.Group className="dietary" controlId="dietary.input">
                <Form.Label>Are there any dietary restrictions or allergies?</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <br/>
            
            {/* Song Request */}
            <Form.Group className="songrequest" controlId="songrequest.input">
                <Form.Label>Do you have a song request?</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

         </Form>
    )
}

export default Modalpage1;