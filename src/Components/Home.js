import React, { Component} from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  CardColumns,
  Button, Form, Col,
} from "react-bootstrap";
import axios from "axios";
import { PopUpMoreInformationForVehicle } from "./PopUpMoreInformationForVehicle";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicles: [],
      MoreInformationForVehiclePopUp: false,
      VehicleIdToPop: null,
      BeginningOfRenting : null,
      EndingOfRenting : null,
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

  HandleSubmit = async (e) => {
    console.log('geldi')
    console.log()
    var self = this;

    e.preventDefault(); //linkteki sorguyu engeller

    let url = "http://localhost:55991/api/vehicle/VehicleGetAvailables";


    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EndingOfRenting : this.state.EndingOfRenting,
        BeginningOfRenting : this.state.BeginningOfRenting,
      })
    })
        .then(res => res.json())
        .then((result) =>
        {
          if(result !== null){
            self.setState({
              Vehicles: result,
            });
          }


        }).catch((error) =>
            {
              alert("Failed " + error.message)
            }

        )
  };

  render() {
    const { Vehicles } = this.state;

    return (

        <div>
          <Form onSubmit={this.HandleSubmit} style={{marginLeft:'50rem'}}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Beginning Date Of Renting</Form.Label>

              <p>
                <DatePicker selected={this.state.BeginningOfRenting}
                            onChange={date => this.setState({
                              BeginningOfRenting : date
                            })}
                            dateFormat = 'yyyy/MM/dd'
                            minDate = {new Date()}
                />
              </p>

            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Ending Date Of Renting</Form.Label>

              <p>
                <DatePicker selected={this.state.EndingOfRenting}
                            onChange={date => this.setState({
                              EndingOfRenting: date
                            })}
                            dateFormat = 'yyyy/MM/dd'
                            minDate = {new Date()}
                            filterDate = {date => date > this.state.BeginningOfRenting}/>
              </p>

            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Button
                  style={{ padding: "1rem" }}
                  variant="success"
                  type="submit"
              >
                Apply Filter
              </Button>
            </Form.Group>
          </Form>


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
            vehicle = {this.state.Vehicles.filter(item => item.Id === this.state.VehicleIdToPop)}
          />
        ) : null}
      </div>
    );
  }
}
