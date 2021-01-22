import React, { Component } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";

export class ManageCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
         CompanyId : 6,
         Company : {}
        };

    }


    componentDidMount = async () => {
        let url = "http://localhost:55991/api/Company/CompanyInfoGet/" + this.state.CompanyId;
        let response = await fetch(url);
        let data = await response.json();

        this.setState({
            Company : data
        })
    }


    RemoveCompany = async () =>
    {
        alert("Remove company")
        // let VehicleId = this.state.vehicle[0].Id
        // let url = "http://localhost:55991/api/Vehicle/VehicleRemove/" + VehicleId;
        // let response = await fetch(url);
        // let data = await response.json();
        // alert(data)
        // this.props.onClose()
    }

    HandleSubmit =async (e) => {
        e.preventDefault(); //linkteki sorguyu engeller

        let form = e.target;

        let url = "http://localhost:55991/api/Company/CompanyUpdate";


        await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Id: form.CompanyId.value,
                Name: form.Name.value,
                City: form.City.value,
                Address: form.Address.value,
                PhoneNumber: form.PhoneNumber.value,
                PhotoURL: "link",
                DatetimeOfCreated: form.DateTimeOfCreated.value,
                Point : form.Point.value

            })
        })
            .then(res => res.json())
            .then((result) =>
            {
                alert('Result: ' + result)

            }).catch((error) =>
                {
                    alert(error.message)
                }

            )
    };


    render() {
        let company = this.state.Company

        return (
            <div>
                <div className="container">
                    <Col md={12} xs={6}>
                        <Form onSubmit={this.HandleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Company Id</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="CompanyId"
                                    required
                                    placeholder={company.Id}
                                    defaultValue = {company.Id}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>DateTimeOfCreated</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="DateTimeOfCreated"
                                    required
                                    placeholder={company.DatetimeOfCreated}
                                    defaultValue = {company.DatetimeOfCreated}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Point</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="Point"
                                    required
                                    placeholder={company.Point}
                                    defaultValue = {company.Point}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder=""
                                    required
                                    name="Name"
                                    defaultValue = {company.Name}
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput3">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder=""
                                    name="City"
                                    required
                                    defaultValue = {company.City}
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput4">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder=""
                                    name="Address"
                                    required
                                    defaultValue = {company.Address}
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>PhoneNumber</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder=""
                                    name="PhoneNumber"
                                    required
                                    defaultValue = {company.PhoneNumber}
                                />
                            </Form.Group>
                            <Form.Group>
                                photo
                                <Form.File
                                    id="exampleFormControlFile1"
                                    label="Example file input"
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Button
                                    style={{ padding: "1rem" }}
                                    variant="success"
                                    type="submit"
                                >
                                    Update
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </div>
                <Button
                    style={{ padding: "1rem" , marginLeft: '10%'}}
                    variant="danger"
                    onclick={this.RemoveCompany}
                >
                    Remove Company
                </Button>
            </div>
        );
    }
}
