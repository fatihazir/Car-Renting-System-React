import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup ,CardColumns, Button, ButtonToolbar} from "react-bootstrap";
import {MoreInformationForCompany} from './MoreInformatinForCompany'
import axios from "axios";

export class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Companies: [],
    };
  }


  componentDidMount = async () =>
  {
    let url = "http://localhost:55991/api/Company/CompanyListGet";
    var self = this
    axios
    .get(url)
    .then(function (response) {
      // handle success
      self.setState(
        {
          Companies : response.data
        })

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }



  render() {
    const { Companies } = this.state;

    return (
      <CardColumns className="justify-content-center">

        {Companies.map((company) => (
          <Card border="secondary" key={company.Id} style={{ width: "25rem", justifyContent:'center', marginLeft: '3rem'}}>
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
              <Card.Link style={{float:'left', padding: '1rem'}} href="/companylist"><Button variant="flat" size="xxs">View Vehicles</Button></Card.Link>
              <Card.Link style={{float:'right', padding: '1rem' }} href="#"><Button variant="flat" size="xxs">More Information</Button></Card.Link>
            </Card.Body>
          </Card>
        ))}
        
     </CardColumns>
    );
  }
}
