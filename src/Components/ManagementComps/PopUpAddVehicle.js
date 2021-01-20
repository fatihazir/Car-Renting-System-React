import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class PopUpAddVehicle extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          airBag: true,
        };
      }

  HandleSubmit = (e) => {
    e.preventDefault(); //linkteki sorguyu engeller

    let form = e.target;

    let url = "http://localhost:55991/api/Company/CompanyVehicleAdd";
    
    
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        AmoutOfSeat: form.AmountOfSeat.value,
        Brand: form.Brand.value,
        CompanyId: form.CompanyId.value,
        CurrentKm: form.CurrentKm.value,
        DailyPrice: form.DailyPrice.value,
        HaveAirBag: this.state.airBag,
        MinimumAgeLimit: form.MinimumAgeLimit.value,
        ModelName: form.ModelName.value,
        PhotoURL: null,
        Plate: form.Plate.value,
        RequiredOldForLicense: form.RequiredOldForLicense.value,
      })
    }).then(response => response.JSON()).then((result) => 
      {
          alert('result: ' + result)
      },
      (error) => {
          alert("failed")
      }
      )
  };

  yourChangeHandler(event) {
      this.setState({
          airBag : event.target.value
      })

  }

  render() {
    return (
      <div>
        <Modal.Dialog
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Vehicle
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container">
              <Col md={12} xs={6}>
                <Form onSubmit={this.HandleSubmit}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Company Id</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      name="CompanyId"
                      required
                      placeholder="6"
                      value="6"
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="Brand"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Model Name</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="ModelName"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput4">
                    <Form.Label>Plate</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="Plate"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Amount Of Seat</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="AmountOfSeat"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Have Airbag</Form.Label>
                    <Form.Control
                      as="select"
                      name="HaveAirBag"
                      onChange={this.yourChangeHandler.bind(this)}
                    >
                      <option>true</option>
                      <option>false</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Current Km</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="CurrentKm"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Minimum Age Limit</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="MinimumAgeLimit"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Required Old For Licence</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="RequiredOldForLicense"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Daily Price</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      name="DailyPrice"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.File
                      id="exampleFormControlFile1"
                      label="Example file input"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Button
                      style={{ padding: "1rem" }}
                      variant="success"
                      type="submit"
                    >
                      Save And Close
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              style={{ padding: "1rem" }}
              variant="danger"
              onClick={this.props.onClose}
            >
              Close Without Saving
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
