import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactEncrypt from 'react-encrypt'
import {Button, Form, Container, Col} from 'react-bootstrap';
import axios from "axios";
import {DirectToPanelAfterLogin} from './ManagementComps/DirectToPanelAfterLogin'


export class Renderer extends Component {

    static contextTypes = {
        encrypt: PropTypes.func.isRequired,
        decrypt: PropTypes.func.isRequired,
    }

    state = {
        pureText: "",
        RedirectPopUp: false,
    };

    HandleSubmit =async (e) => {
        var self = this
        e.preventDefault(); //linkteki sorguyu engeller

        let form = e.target;

        let url = "http://localhost:55991/api/staff/GetEncKey";


        await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Username: form.Username.value,

            })
        })
            .then(res => res.json())
            .then((result) =>
            {
                const {decrypt} = this.context;
                console.log(form.pureText.value)
                console.log(decrypt(result.Password))
                if(form.pureText.value === decrypt(result.Password)){
                    let url = "http://localhost:55991/api/staff/Get/" + result.Id;
                    axios
                        .get(url)
                        .then(function (response) {
                            // handle success
                            sessionStorage.setItem('Staff', JSON.stringify(response.data))
                            self.setState({
                                RedirectPopUp: true
                            });


                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .then(function () {
                            // always executed
                        });
                }
                else{
                    alert("Username or password is not valid!")
                }
            }).catch((error) =>
                {
                    alert("failed " + error.message)
                }

            )
    };




    onChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        });


    }

    render() {
        const {pureText} = this.state;

        const {encrypt,decrypt} = this.context;

        let encryptedText = encrypt(pureText);



        return (
            <div className="justify-content-center">
                <Container>

                    <h1>Staff Panel</h1>


                    <Form onSubmit={this.HandleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="Username"
                                required
                                placeholder="Username"

                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                size="sm"
                                type="password"
                                placeholder="Password"  onChange={this.onChange} name="pureText"
                                required

                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label></Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Your encrypted password will be shown here"
                                name="encryptedText"
                                required
                                readOnly
                                defaultValue={encryptedText}
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Button
                                style={{ padding: "1rem" }}
                                variant="success"
                                type="submit"

                            >
                                Login
                            </Button>
                        </Form.Group>
                    </Form>

                </Container>
                {this.state.RedirectPopUp ? (
                    <DirectToPanelAfterLogin />
                ) : null}
            </div>
        )

    }
}

export class StaffLogin extends Component {

    render() {
        const encryptKey = "ewfWE@#%$rfdsefgdsf";
        return <div>

            <ReactEncrypt
                encryptKey={encryptKey}
            >
                <Renderer/>
            </ReactEncrypt>
        </div>
    }
}


