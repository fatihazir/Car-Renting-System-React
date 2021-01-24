import React, { Component} from "react";

import { Modal, Button} from "react-bootstrap";

export class DirectToPanelAfterLogin extends Component {


    render() {

        return (
            <div>
                <Modal show={true}
                       {...this.props}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header>
                        <b>Username and password is correct. <i className="fas fa-check"></i> <i
                            className="fas fa-check"></i></b>
                    </Modal.Header>


                    <Modal.Footer>
                        <a href="/companypanel">
                            <Button
                                style={{ padding: "1rem" }}
                                variant="success"
                            >
                                Go to Panel
                            </Button>
                        </a>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}
