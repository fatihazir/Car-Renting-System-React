import React, { Component, useState } from "react";

import { Modal, Button, Col, Form } from "react-bootstrap";

export class PopUpMoreInformationForVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicle: this.props.vehicle[0]
    };
  }



  render() {
    const { Vehicle } = this.state;

    return (
      <div>
         <Modal show={true}
           {...this.props}
           
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
              <b>{Vehicle.Brand} {Vehicle.ModelName}</b>
          </Modal.Header>
          <Modal.Body>
            <p>Amount of seat : {Vehicle.AmoutOfSeat}</p>
            <p>Current Km : {Vehicle.CurrentKm}</p>
            <p>Daily Price : {Vehicle.DailyPrice}</p>
            <p>Airbag : {Vehicle.HaveAirBag}</p>
            <p>Minimum Age Limit :  {Vehicle.MinimumAgeLimit}</p>
            <p>Plate : {Vehicle.Plate}</p>
            <p>Required Old For License : {Vehicle.RequiredOldForLicense}</p>

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


