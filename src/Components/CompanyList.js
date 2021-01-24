import React, { Component } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  CardColumns,
  Button
} from "react-bootstrap";

import axios from "axios";
import {PopUpMoreInformationForCompany} from './PopUpMoreInformationForCompany'

export class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Companies: [],
      VehiclesByCompanyPopUp: false,
      MoreInformationByCompanyPopUp: false,
      CompanyIdToPop : 9
    };
  }

  componentDidMount = async () => {
    let url = "http://localhost:55991/api/Company/CompanyListGet";
    var self = this;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        self.setState({
          Companies: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  ShowPopUpVehiclesByCompany = (companyId) =>
  {
    this.setState({ 
      VehiclesByCompanyPopUp : true,
      CompanyIdToPop : companyId
    })
  }

  HidePopUpVehiclesByCompany = () =>
  {
    this.setState({ VehiclesByCompanyPopUp : false})
  }
  

  ShowPopUpMoreInformation = (companyId) =>
  {
    this.setState({ 
      CompanyIdToPop : companyId,
      MoreInformationByCompanyPopUp : true
    })
  }

  HidePopUpMoreInformation = () =>
  {
    this.setState({ MoreInformationByCompanyPopUp : false})
  }

  render() {
    const { Companies } = this.state;

    return (
      <div>
        <CardColumns className="justify-content-center">
          {Companies.map((company) => (
            <Card
              border="secondary"
              key={company.Id}
              style={{
                width: "25rem",
                justifyContent: "center",
                marginLeft: "3rem",
              }}
            >
              <Card.Img variant="top" src={company.PhotoURL} />
              <Card.Body>
                <Card.Title>{company.Name}.</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{company.VehicleAmount}</ListGroupItem>
                <ListGroupItem>{company.City}</ListGroupItem>
                <ListGroupItem>{company.Point}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link style={{ float: "left", padding: "1rem" }}>
                 <a href={'http://localhost:3000/vehiclesbycompany/' + company.Id}>
                   <Button variant="flat" size="xxs" >
                     View Vehicles
                   </Button>
                 </a>
                </Card.Link>
                <Card.Link style={{ float: "right", padding: "1rem" }} onClick={() => this.ShowPopUpMoreInformation(company.Id)}>
                  <Button variant="flat" size="xxs">

                    More Information
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>

        {this.state.MoreInformationByCompanyPopUp ? (
                <PopUpMoreInformationForCompany  onClose={this.HidePopUpMoreInformation} company = {this.state.Companies.filter(item => item.Id === this.state.CompanyIdToPop)} />
              ) : null}
      </div>
    );
  }
}
