import React, {Component} from 'react';
import {Container, Button, Col, Row, Form, Card, Modal} from "react-bootstrap";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export class RentCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vehicle : {},
            Customer : {},
            BeginningOfRenting : null,
            EndingOfRenting : null,
            BeginningDateOfDriverLicense : null,
            EndingDateOfDriverLicense : null,
            TodaysDate : new Date()

        };
    }
    
    componentDidMount = async  () => {
        let url = "http://localhost:55991/api/Vehicle/VehicleFind/" + this.props.match.params.id
        let response = await fetch(url);
        let data = await response.json();

        this.setState({
            Vehicle : data
        })
    }

    CreateRentRequest = async () => {
        let url = "http://localhost:55991/api/Company/CompanyRentInfoAdd";
        await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                CompanyId: this.state.Vehicle.CompanyId,
                VehicleId: this.state.Vehicle.Id,
                Price : this.state.Vehicle.DailyPrice,
                IsRented : 0,
                IsRequestPending : 1,
                CustomerId : this.state.Customer.Id,
                EndingOfRenting : this.state.EndingOfRenting,
                BeginningOfRenting : this.state.BeginningOfRenting,
                DatetimeOfCreated : this.state.TodaysDate
            })
        })
            .then(res => res.json())
            .then((result) =>
            {
                alert('result: ' + result)

            }).catch((error) =>
            {
                alert("failed " + error.message)
            }

        )
    }

    FindCustomer = async (identificationNumber) => {
        let url = "http://localhost:55991/api/Customer/FindCustomer/" + identificationNumber
        let response = await fetch(url);
        let data = await response.json();
        await this.setState({
            Customer : data
        })

        this.CreateRentRequest()

    }

    HandleSubmit = async (e) => {
        e.preventDefault(); //linkteki sorguyu engeller

        let form = e.target;

        let url = "http://localhost:55991/api/Customer/InsertCustomer";


        await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Name: form.Name.value,
                Surname: form.Surname.value,
                CityOfBirth: form.CityOfBirth.value,
                IdentificationNumber : form.IdentificationNumber.value,
                Address: form.Address.value,
                BeginningDateOfDriverLicense : this.state.BeginningDateOfDriverLicense,
                EndingDateOfDriverLicense : this.state.EndingDateOfDriverLicense,
                DatetimeOfCreated : this.state.TodaysDate

            })
        })
            .then(res => res.json())
            .then((result) =>
            {
                alert('result: ' + result)
                if(result === "Inserted Succesfuly!"){
                    this.FindCustomer(form.IdentificationNumber.value)
                }


            }).catch((error) =>
            {
                alert("failed " + error.message)
            }

        )
    };


    render() {
        const { Vehicle } = this.state
        return (
            <div className="container">
                <Container >
                    <Row>
                        <Col xs={4} >

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://png.pngtree.com/element_pic/00/16/07/1057826efdb4355.jpg" />
                                <Card.Body>
                                    <Card.Title><b>{Vehicle.Brand} {Vehicle.ModelName}</b></Card.Title>
                                    <hr/>
                                    <Card.Text>
                                        <p>Amount of seat : {Vehicle.AmoutOfSeat}</p>
                                        <p>Current Km : {Vehicle.CurrentKm}</p>
                                        <p><i className="fas fa-lira-sign"></i> Daily Price : {Vehicle.DailyPrice} </p>
                                        <p>Airbag : {Vehicle.HaveAirBag}</p>
                                        <p>Minimum Age Limit :  {Vehicle.MinimumAgeLimit}</p>
                                        <p>Plate : {Vehicle.Plate}</p>
                                        <p>Required Old For License : {Vehicle.RequiredOldForLicense}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col >
                            <Form onSubmit={this.HandleSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        name="Name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput2">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder=""
                                        required
                                        name="Surname"
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput3">
                                    <Form.Label>City Of Birth</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder=""
                                        name="CityOfBirth"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput4">
                                    <Form.Label>IdentificationNumber</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder=""
                                        name="IdentificationNumber"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder=""
                                        name="Address"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Beginning Date Of Driver License</Form.Label>

                                    <p>
                                        <DatePicker selected={this.state.BeginningDateOfDriverLicense}
                                                    onChange={date => this.setState({
                                                        BeginningDateOfDriverLicense : date
                                                    })}
                                                    dateFormat = 'dd/MM/yyyy'
                                                    maxDate = {new Date()}/>
                                    </p>

                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Ending Date Of Driver License</Form.Label>
                                    <p>
                                        <DatePicker selected={this.state.EndingDateOfDriverLicense}
                                                    onChange={date => this.setState({
                                                        EndingDateOfDriverLicense : date
                                                    })}
                                                    dateFormat = 'dd/MM/yyyy'
                                                    minDate = {new Date()}/>
                                    </p>

                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Beginning Date Of Renting</Form.Label>

                                    <p>
                                        <DatePicker selected={this.state.BeginningOfRenting}
                                                    onChange={date => this.setState({
                                                        BeginningOfRenting : date
                                                    })}
                                                    dateFormat = 'dd/MM/yyyy'
                                                    minDate = {new Date()}
                                                    filterDate = {date => date < this.state.EndingDateOfDriverLicense}/>
                                    </p>

                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Ending Date Of Renting</Form.Label>

                                    <p>
                                        <DatePicker selected={this.state.EndingOfRenting}
                                                    onChange={date => this.setState({
                                                        EndingOfRenting: date
                                                    })}
                                                    dateFormat = 'dd/MM/yyyy'
                                                    minDate = {new Date()}
                                                    filterDate = {date => date < this.state.EndingDateOfDriverLicense}/>
                                    </p>

                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Button
                                        style={{ padding: "1rem" }}
                                        variant="success"
                                        type="submit"
                                    >
                                        Save And Close
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

