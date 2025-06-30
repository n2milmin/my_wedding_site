import { useState } from "react";
import { Modal, Button} from "react-bootstrap";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h2>RSVP</h2>

      <Button variant="primary" onClick={ handleOpen }>Open</Button>

      <Modal 
        show={ isOpen } 
        onHide={ handleClose } 
        backdrop="static"
        scrollable={true}
        centered={true}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalComponent;