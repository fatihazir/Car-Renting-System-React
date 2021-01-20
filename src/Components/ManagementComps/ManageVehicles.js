import React, { Component } from "react";
import { PopUpAddVehicle } from "./PopUpAddVehicle";

import {
  Card,
  ListGroupItem,
  ListGroup,
  CardColumns,
  Button,
  Container,
  Row,
  Col,
  ButtonToolbar,
} from "react-bootstrap";

export class ManageVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicles: [],
      AddVehiclePopUpShow: false,
    };
  }

  componentDidMount() {
    this.RefleshList();
  }

  async RefleshList() {
    let compId = "6";
    let url = "http://localhost:55991/api/Company/CompanyVehicleGet/" + compId;
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      Vehicles: data,
    });
  }

  ShowPopUpAddVehicle = () => {
    this.setState({
      AddVehiclePopUpShow: true
    });
  };

  // SaveAndHidePopUpAddVehicle = () => {
  //   this.setState({
  //     AddVehiclePopUpShow: false
  //   });
  //   window.alert('saved')
  // };

 HidePopUpAddVehicle = () => {
    this.setState({
      AddVehiclePopUpShow: false
    });
  };

  render() {
    const { Vehicles } = this.state;
   
    console.log(this.state.ShowAddVehiclePopUp);
    return (
      <div>

        <Container className="p-3">
          <Row className="justify-content-md-center">
            <Col xs={4} sm={4} md={2}>
              <ButtonToolbar>
                <Button size="lg" onClick={this.ShowPopUpAddVehicle}>Add Vehicle</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>

        {this.state.AddVehiclePopUpShow ? <PopUpAddVehicle onHide={this.SaveAndHidePopUpAddVehicle} onClose={this.HidePopUpAddVehicle}/> : null }

        <CardColumns className="justify-content-center">
          {Vehicles.map((vehicle) => (
            <Card
              border="secondary"
              key={vehicle.Id}
              style={{
                width: "24rem",
                justifyContent: "center",
                marginLeft: "3rem",
              }}
            >
              <Card.Img variant="top" src={vehicle.PhotoURL} />
              <Card.Body>
                <Card.Title>Model : {vehicle.ModelName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Brand : {vehicle.Brand}</ListGroupItem>
                <ListGroupItem>
                  Daily Price : {vehicle.DailyPrice} £
                </ListGroupItem>
                <ListGroupItem>
                  Minimum Age Limit : {vehicle.MinimumAgeLimit}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="">
                  <Button variant="flat" size="xxs">
                    Edit Vehicle Details
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    );
  }
}
