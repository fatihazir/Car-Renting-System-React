import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class EditStaff extends Component {
  render() {
     
    return (
      <div>
        <Modal show={true}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
        
          <Modal.Header>header</Modal.Header>
          <Modal.Body>modal body </Modal.Body>
          <Modal.Footer>
          <Button
              style={{ padding: "1rem" }}
              variant="danger"
              onClick={this.props.onClose}
            >
              Close Without Saving
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
