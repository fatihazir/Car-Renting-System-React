import React, { Component} from "react";

import {Modal, Button, ListGroupItem} from "react-bootstrap";

export class PopUpCheckDetailsForRent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RentInfoId : this.props.rentInfoId,
            Customer: {},
            Vehicle : {}
        };
    }



    componentDidMount = async () => {
        let url = "http://localhost:55991/api/rent/RentExtraInfo/" + this.state.RentInfoId;
        let response = await fetch(url);
        let data = await response.json();

        this.setState({
            Customer : data.Customer,
            Vehicle : data.Vehicle
        })
    }


    render() {
        const { Customer } = this.state
        const { Vehicle } = this.state;

        return (
            <div>
                <Modal show={true}
                       {...this.props}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header>
                        <b>Customer</b>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Name : {Customer.Name}</p>
                        <p> Surname :  {Customer.Name}</p>
                        <p>Identification Number :  {Customer.IdentificationNumber}</p>
                        <p> City Of Birth :  {Customer.CityOfBirth}</p>
                        <p> Phone Number : </p>


                    </Modal.Body>
                    <Modal.Header>
                        <b>Vehicle</b>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{Vehicle.Brand} {Vehicle.ModelName}</p>
                        <p>Plate : {Vehicle.Plate}</p>

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
