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
  ButtonToolbar
} from "react-bootstrap";

let dataOfManager = sessionStorage.getItem('Manager')
let Manager = JSON.parse(dataOfManager)

let dataOfStaff = sessionStorage.getItem('Staff')
let Staff = JSON.parse(dataOfStaff)


export class ManageVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicles: [],
      AddVehiclePopUpShow: false,
      EditVehiclePopUpShow: false,
      VehicleIdDueToEdit : 1,
      compId : null
    };
  }

  componentDidMount() {
    if(Manager || Staff){
      this.RefleshList();
    }
  }

  componentDidUpdate() {
    if(Manager || Staff){
      this.RefleshList();
    }
  }

  FindCompId(){
    if(Manager){
      return Manager.CompanyId
    }else{
      return Staff.CompanyId
    }
  }

  async RefleshList() {
    let compId = "6";
    let url = "http://localhost:55991/api/Company/CompanyVehicleGet/" + this.FindCompId()
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

  ShowPopUpEditVehicle = (vehicleId) => {
    this.setState({
      EditVehiclePopUpShow: true,
      VehicleIdDueToEdit : vehicleId
    });
  };

  HidePopUpEditVehicle = () => {
    this.setState({
      EditVehiclePopUpShow: false,
    });
  };


  render() {
    const { Vehicles } = this.state;

    if(Manager || Staff){
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
                        width: "30rem",
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
                          onClick={() => this.ShowPopUpEditVehicle(vehicle.Id)}
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
                <EditVehicle  onClose={this.HidePopUpEditVehicle} vehicle = {this.state.Vehicles.filter(item => item.Id === this.state.VehicleIdDueToEdit)} />
            ) : null}

          </div>
      );
    }
    else{
      return(
          <div>
            <h3 style={{textAlign:'center'}}>Yetkiniz yok</h3>
          </div>
      )
    }
  }
}
