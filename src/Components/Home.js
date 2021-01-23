import React, { Component, useState } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  CardColumns,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { PopUpMoreInformationForVehicle } from "./PopUpMoreInformationForVehicle";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicles: [],
      MoreInformationForVehiclePopUp: false,
      VehicleIdToPop: null,
    };
  }

  componentDidMount = async () => {
    let url = "http://localhost:55991/api/Vehicle/VehicleListGet";
    var self = this;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        self.setState({
          Vehicles: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        alert(error);
      })
      .then(function () {
        // always executed
      });
  };

  ShowPopUpMoreInformation = (id) => {
    this.setState({
      VehicleIdToPop : id,
      MoreInformationForVehiclePopUp: true,
    });

  };

  HidePopUpMoreInformation = () => {
    this.setState({ MoreInformationForVehiclePopUp: false });
  };

  render() {
    const { Vehicles } = this.state;

    return (
      <div>
        <CardColumns className="justify-content-center">
          {Vehicles.map((vehicle) => (
            <Card
              border="secondary"
              key={vehicle.Id}
              style={{
                width: "25rem",
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
                <Card.Link >
                  <Button
                    variant="flat"
                    size="xxs"
                    onClick={() => this.ShowPopUpMoreInformation(vehicle.Id)}
                  >
                    Vehicle Details
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>

        {this.state.MoreInformationForVehiclePopUp ? (
          <PopUpMoreInformationForVehicle
            onClose={this.HidePopUpMoreInformation}
            vehicle = {this.state.Vehicles.filter(item => item.Id == this.state.VehicleIdToPop)}
          />
        ) : null}
      </div>
    );
  }
}
