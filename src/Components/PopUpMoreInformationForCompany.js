import React, { Component, useState } from "react";

import { Modal, Button, Col, Form } from "react-bootstrap";

export class PopUpMoreInformationForCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Company: this.props.company[0]
    };
  }



  render() {
    const { Company } = this.state;

    return (
      <div>
         <Modal show={true}
           {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
              <b>{Company.Name}</b>
          </Modal.Header>
          <Modal.Body>
              <p>City : {Company.City}</p>
              <p>Address : {Company.Address}</p>
              <p>Phone : {Company.PhoneNumber}</p>
              <p>Point : {Company.Point} / 5</p>
              <p>Amount of vehicle : {Company.VehicleAmount}</p>
              
          </Modal.Body>
          

          <Modal.Footer>
            <Button
              style={{ padding: "1rem" }}
              variant="danger"
              onClick={this.props.onClose}
            >
              Close 
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    );
  }
}
