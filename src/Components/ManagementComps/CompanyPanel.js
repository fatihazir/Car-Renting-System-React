import React, { Component } from "react";
import {
  Card,
  CardColumns,
  Button
} from "react-bootstrap";

export class CompanyPanel extends Component {
  render() {
    return (
      <CardColumns className="justify-content-center">
        <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '3rem'}}>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>My Vehicles</Card.Title>
            <Card.Text>
              <br/>
            </Card.Text>
            <a style={{float:'left', marginBottom : '1rem'}} href="/managevehicle"><Button variant="flat" size="xxs">Manage vehicles</Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '3rem'}}>
          <Card.Img variant="top" src="data:image/png;base64,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" />
          <Card.Body>
            <Card.Title>My Staff</Card.Title>
            <Card.Text>
              <br/>
            </Card.Text>
            <a style={{float:'left', marginBottom : '1rem'}} href="/managestaff"><Button variant="flat" size="xxs">Manage Staff</Button></a>
          </Card.Body>
        </Card>
        
        <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '3rem'}}>
          <Card.Img variant="top" src="https://images.vexels.com/media/users/3/144882/isolated/preview/a98fa07f09c1d45d26405fa48c344428-company-building-silhouette-by-vexels.png" />
          <Card.Body>
            <Card.Title>My Company</Card.Title>
            <Card.Text>
              <br/>
            </Card.Text>
            <a style={{float:'left', marginBottom : '1rem'}} href="/managecompany"><Button variant="flat" size="xxs">Manage Company</Button></a>
          </Card.Body>
        </Card>
      </CardColumns>
    );
  }
}
