import React, { Component} from "react";

import {Modal, Button, Form, Col} from "react-bootstrap";

export class PopUpRezInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RezInfo:{}

        };
    }

    HandleSubmit =async (e) => {
        e.preventDefault(); //linkteki sorguyu engeller

        let form = e.target;

        let url = "http://localhost:55991/api/rent/RentInfoForCustomer/" + form.id.value;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        this.setState({
            RezInfo : data
        })

        if(data.IsRented === true)
        {
            alert("YOUR RENTING REQUEST IS CONFIRMED")
        }
        else if(data.IsRented === false && data.IsRequestPending === true){
            alert("YOUR REQUEST IS STILL PENDİNG...")
        }
        else if(data.IsRented === false && data.IsRequestPending === false){
            alert("YOUR REQUEST IS DENIED!")
        }
        else{
            alert("Wrong Identification Number Typed")
        }

    };


    render() {
        const { RezInfo } = this.state

        return (
            <div>
                <Modal show={true}
                       {...this.props}

                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Body>
                        <p><b>Request Situation </b></p>

                        <Form onSubmit={this.HandleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="id"
                                    required
                                    placeholder="Type your identification number"
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Button
                                    style={{ padding: "1rem" }}
                                    variant="success"
                                    type="submit"
                                >
                                    Check My Reservation
                                </Button>
                            </Form.Group>
                        </Form>



                    </Modal.Body>


                    <Modal.Footer>
                        <Button
                            style={{ padding: "1rem" }}
                            variant="danger"
                            onClick={this.props.onClose}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}


