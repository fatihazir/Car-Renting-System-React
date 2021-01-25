import React, { Component} from "react";

import { Modal, Button} from "react-bootstrap";

export class PopUpMoreInformationForCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Company: this.props.company[0]
    };
  }



  render() {
    const { Company } = this.state;

    return (
      <div>
         <Modal show={true}
           {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
              <b>{Company.Name}</b>
          </Modal.Header>
          <Modal.Body>
              <p> <i className="fas fa-map-marked-alt"></i> City : {Company.City}</p>
              <p> <i className="fas fa-map-marked-alt"></i> Address : {Company.Address}</p>
              <p><i className="fas fa-phone-square-alt"></i> Phone : {Company.PhoneNumber}</p>
              <p> <i className="fas fa-star"></i> Point : {Company.Point} / 5</p>
              <p> <i className="fas fa-car"></i> Amount of vehicle : {Company.VehicleAmount}</p>
              
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
