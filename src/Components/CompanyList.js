import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup ,CardColumns, Button} from "react-bootstrap";

export class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Companies: [],
    };
  }


  componentDidMount() {
    this.RefleshList();
  }

  async RefleshList() {
    let url = "http://localhost:55991/api/Company/CompanyListGet";
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      Companies: data,
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
              <Card.Link style={{float:'left', padding: '1rem'}} href="#"><Button variant="flat" size="xxs">View Vehicles</Button></Card.Link>
              <Card.Link style={{float:'right', padding: '1rem' }} href="#"><Button variant="flat" size="xxs">More Information</Button></Card.Link>
            </Card.Body>
          </Card>
        ))}
        
     </CardColumns>
    );
  }
}
