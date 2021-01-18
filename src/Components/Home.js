import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup ,CardColumns, Button} from "react-bootstrap";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Vehicles: [],
    };
  }


  componentDidMount() {
    this.RefleshList();
  }

  async RefleshList() {
    let url = "http://localhost:55991/api/Vehicle/VehicleListGet";
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      Vehicles: data,
    });
  }

  render() {
    const { Vehicles } = this.state;

    return (
        <CardColumns className="justify-content-center">

        {Vehicles.map((vehicle) => (
          <Card border="secondary" key={vehicle.Id} style={{ width: "25rem", justifyContent:'center', marginLeft: '3rem'}}>
            <Card.Img variant="top" src={vehicle.PhotoURL} />
            <Card.Body>
              <Card.Title>Model : {vehicle.ModelName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Brand : {vehicle.Brand}</ListGroupItem>
              <ListGroupItem>Daily Price : {vehicle.DailyPrice} £</ListGroupItem>
              <ListGroupItem>Minimum Age Limit : {vehicle.MinimumAgeLimit}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href=""><Button variant="flat" size="xxs">Vehicle Details</Button></Card.Link>
            </Card.Body>
          </Card>
        ))}
        
     </CardColumns>
     );
  }
}
