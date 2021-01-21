import React, { Component } from "react";
import { PopUpAddStaff } from "./PopUpAddStaff";
import { EditStaff } from "./EditStaff";

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

export class ManageStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Staff: [],
      AddStaffPopUpShow: false,
      EditStaffPopUpShow: false,
    };
  }

  componentDidMount() {
    this.RefleshList();
  }

  componentDidUpdate() {
    this.RefleshList();
  }

  async RefleshList() {
    let compId = "5";
    let url = "http://localhost:55991/api/Company/CompanyStaffGet/" + compId;
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      Staff: data,
    });
  }

  ShowPopUpAddStaff = () => {
    this.setState({
      AddStaffPopUpShow: true,
    });
  };

  HidePopUpAddStaff = () => {
    this.setState({
      AddStaffPopUpShow: false,
    });
  };

  ShowPopUpEditStaff = () => {
    this.setState({
      EditStaffPopUpShow: true,
    });
  };

  HidePopUpEditStaff = () => {
    this.setState({
      EditStaffPopUpShow: false,
    });
  };


  render() {
    const { Staff } = this.state;

    return (
      <div>
         {this.state.AddStaffPopUpShow ? (
          <PopUpAddStaff onClose={this.HidePopUpAddStaff} />
        ) : null}
        
        <Container className="p-3">
          <Row className="justify-content-md-center">
            <Col xs={4} sm={4} md={2}>
              <ButtonToolbar>
                <Button size="lg" onClick={this.ShowPopUpAddStaff}>
                  Add Staff
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>

        <CardColumns className="justify-content-center">
          {Staff.sort((a, b) =>
            a.DatetimeOfCreated > b.DatetimeOfCreated ? 1 : -1
          ).map((staff) => (
            <Card
              border="secondary"
              key={staff.Id}
              style={{
                width: "24rem",
                justifyContent: "center",
                marginLeft: "3rem",
              }}
            >
              <Card.Img variant="top" src={staff.PhotoURL} />
              <Card.Body>
                <Card.Title>Model :</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Brand : </ListGroupItem>
                <ListGroupItem>
                  Daily Price :  £
                </ListGroupItem>
                <ListGroupItem>
                  Minimum Age Limit : 
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button
                  onClick={this.ShowPopUpEditStaff}
                  variant="flat"
                  size="xxs"
                >
                  Edit Vehicle Details
                </Button>
              </Card.Body>
             
            </Card>
          ))}
        </CardColumns>

        {this.state.EditStaffPopUpShow ? (
                <EditStaff  onClose={this.HidePopUpEditStaff}/>
              ) : null}
      </div>
    );
  }
}

