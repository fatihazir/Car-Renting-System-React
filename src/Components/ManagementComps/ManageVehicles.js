import React, { Component } from "react";
import { PopUpAddVehicle } from "./PopUpAddVehicle";
import { EditVehicle } from "./EditVehicle";

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
  Modal,
} from "react-bootstrap";

export class ManageVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicles: [],
      AddVehiclePopUpShow: false,
      EditVehiclePopUpShow: false,
    };
  }

  componentDidMount() {
    this.RefleshList();
  }

  componentDidUpdate() {
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
      AddVehiclePopUpShow: true,
    });
  };

  HidePopUpAddVehicle = () => {
    this.setState({
      AddVehiclePopUpShow: false,
    });
  };

  ShowPopUpEditVehicle = () => {
    this.setState({
      EditVehiclePopUpShow: true,
    });
  };

  HidePopUpEditVehicle = () => {
    this.setState({
      EditVehiclePopUpShow: false,
    });
  };


  render() {
    const { Vehicles } = this.state;

    return (
      <div>
         {this.state.AddVehiclePopUpShow ? (
          <PopUpAddVehicle onClose={this.HidePopUpAddVehicle} />
        ) : null}
        
        <Container className="p-3">
          <Row className="justify-content-md-center">
            <Col xs={4} sm={4} md={2}>
              <ButtonToolbar>
                <Button size="lg" onClick={this.ShowPopUpAddVehicle}>
                  Add Vehicle
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>

        <CardColumns className="justify-content-center">
          {Vehicles.sort((a, b) =>
            a.DatetimeOfCreated > b.DatetimeOfCreated ? 1 : -1
          ).map((vehicle) => (
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
                <Button
                  onClick={this.ShowPopUpEditVehicle}
                  variant="flat"
                  size="xxs"
                >
                  Edit Vehicle Details
                </Button>
              </Card.Body>
             
            </Card>
          ))}
        </CardColumns>

        {this.state.EditVehiclePopUpShow ? (
                <EditVehicle  onClose={this.HidePopUpEditVehicle} vehicle = {this.state.Vehicles[15]}/>
              ) : null}
      </div>
    );
  }
}
