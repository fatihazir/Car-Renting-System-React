import React, { Component, useState } from "react";

import { Modal, Button, Col, Form } from "react-bootstrap";

export class PopUpMoreInformationForVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicle: this.props.vehicle[0],
      Company : {}
    };
  }


  componentDidMount = async () => {
    let url = "http://localhost:55991/api/Company/CompanyInfoGet/" + this.state.Vehicle.CompanyId;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    this.setState({
      Company : data
    })
  }


  render() {
    const { Vehicle } = this.state
    const { Company } = this.state

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
            <hr/>
            <p>Company Name: {Company.Name}</p>
            <p>Company Point: {Company.Point}</p>

          </Modal.Body>
          

          <Modal.Footer>
            <Button
              style={{ padding: "1rem" }}
              variant="danger"
              onClick={this.props.onClose}
            >
              Close
            </Button>
            <a href={'rentcar/' + Vehicle.Id}>
              <Button
                  style={{ padding: "1rem", marginLeft: "1rem" }}
                  variant="success"

              >
                Rent
              </Button>
            </a>
          </Modal.Footer>
        </Modal>
      </div>
      
    );
  }
}


