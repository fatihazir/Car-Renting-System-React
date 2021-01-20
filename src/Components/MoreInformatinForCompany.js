import react , {Component} from 'react'
import{Modal, Button, Row, Col, Form} from 'react-bootstrap'




export class MoreInformationForCompany extends Component 
{
    render ()
    {
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Company Informations
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                    infos
              </div>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" size="xxs" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}