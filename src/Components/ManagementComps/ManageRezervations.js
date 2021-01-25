import React, { Component } from "react";
import { PopUpCheckDetailsForRent } from "./PopUpCheckDetailsForRent";


import {
    Card,
    ListGroupItem,
    ListGroup,
    CardColumns,
    Button,
    Container,
    Row,
    Col,
    ButtonToolbar
} from "react-bootstrap";

let dataOfManager = sessionStorage.getItem('Manager')
let Manager = JSON.parse(dataOfManager)

let dataOfStaff = sessionStorage.getItem('Staff')
let Staff = JSON.parse(dataOfStaff)


export class ManageRezervations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RentInfos: [],
            ShowPopUpCheckDetails: false,
            RentId : null,
        };
    }

    componentDidMount() {
        if(Manager || Staff){
            this.RefleshList();
        }
    }

    componentDidUpdate() {
        if(Manager || Staff){
            this.RefleshList();
        }
    }

    FindCompId(){
        if(Manager){
            return Manager.CompanyId
        }else{
            return Staff.CompanyId
        }
    }

    FindAuthId(){
        if(Manager){
            return Manager.Id
        }else{
            return Staff.Id
        }
    }

    async RefleshList() {
        let url = "http://localhost:55991/api/company/CompanyRentInfoGet/" + this.FindCompId()
        let response = await fetch(url);
        let data = await response.json();


        this.setState({
            RentInfos: data,
        });

    }


    Reject =async (rentId) => {
        let url = "http://localhost:55991/api/rent/RejectRent/" + rentId;

        let response = await fetch(url);
        let data = await response.json();
        alert(data)
    }

    Confirm =async (rentId) => {
        let url = "http://localhost:55991/api/rent/ConfirmRent/" + rentId;

        let response = await fetch(url);
        let data = await response.json();
        alert(data)
    }


    ShowPopUpCheckDetails = (rentId) => {
        this.setState({
            RentId : rentId,
            ShowPopUpCheckDetails: true,
        });
    };

    HidePopUpCheckDetails = () => {
        this.setState({
            ShowPopUpCheckDetails: false,
        });

    };

    render() {
        const { RentInfos } = this.state;


        if(Manager || Staff){
            return (
                <div>

                    <Container className="p-3">
                        <Row className="justify-content-md-center">
                            <Col xs={4} sm={4} md={2}>
                                <ButtonToolbar>
                                    {/*<Button size="lg" onClick={this.ShowPopUpAddVehicle}>*/}
                                    {/*    Add Vehicle*/}
                                    {/*</Button>*/}
                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </Container>

                    <CardColumns className="justify-content-center">
                        {RentInfos.sort((a, b) =>
                            a.DatetimeOfRequest > b.DatetimeOfRequest? 1 : -1
                        ).map((rentInfo) => (
                            <Card
                                border="secondary"
                                key={rentInfo.Id}
                                style={{
                                    width: "25rem",
                                    justifyContent: "center",
                                    marginLeft: "3rem",
                                }}
                            >
                                <Card.Body>
                                    <Card.Title>Is Pending : {rentInfo.IsRequestPending === true ? <b style={{color:'green'}}>Yes</b> : <b style={{color:'grey'}}>No</b>}</Card.Title>
                                    {rentInfo.IsRequestPending === true ?  <Button
                                            onClick={() => this.Confirm(rentInfo.Id)}
                                        variant="success"
                                        size="xxs"
                                    >
                                        Confirm The Request
                                    </Button>
                                        : <Button
                                            onClick={() => this.Confirm(rentInfo.Id)}
                                        variant="secondary"
                                        size="xxs"
                                        disabled
                                    >
                                        Confirm The Request
                                    </Button>}

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        <b>Datetime Of Request : <br/> </b>{rentInfo.DatetimeOfRequest.split("T")[0]} -- {rentInfo.DatetimeOfRequest.split("T")[1]}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <b>Beginning Of Renting : <br/> </b>{rentInfo.BeginningOfRenting.split("T")[0]} -- {rentInfo.BeginningOfRenting.split("T")[1].split("Z")}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                       <b>Ending Of Renting : <br/></b>  {rentInfo.EndingOfRenting.split("T")[0]} -- {rentInfo.EndingOfRenting.split("T")[1].split("Z")}
                                    </ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Button
                                        onClick={() => this.ShowPopUpCheckDetails(rentInfo.Id)}
                                        variant="info"
                                        size="xxs"

                                    >
                                        Check Details
                                    </Button>
                                    <br/><br/>


                                    {rentInfo.IsRequestPending === true ?    <Button
                                            onClick={() => this.Reject(rentInfo.Id)}
                                            variant="danger"
                                            size="xxs"

                                        >
                                            Reject The Request
                                        </Button>
                                        : <Button
                                            onClick={() => this.Reject(rentInfo.Id)}
                                            variant="secondary"
                                            size="xxs"
                                            disabled
                                        >
                                            Confirm The Request
                                        </Button>}


                                </Card.Body>

                            </Card>
                        ))}
                    </CardColumns>

                    {this.state.ShowPopUpCheckDetails ? (
                        <PopUpCheckDetailsForRent  onClose={this.HidePopUpCheckDetails}  rentInfoId = {this.state.RentId}/>
                    ) : null}

                </div>
            );
        }
        else{
            return(
                <div>
                    <h3 style={{textAlign:'center'}}>Yetkiniz yok</h3>
                </div>
            )
        }
    }
}
