import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactEncrypt from 'react-encrypt'
import {Button, Form, Container, Col} from 'react-bootstrap';

export class Renderer extends Component {

    static contextTypes = {
        encrypt: PropTypes.func.isRequired,
        decrypt: PropTypes.func.isRequired,
    }

    state = {
        pureText: "",
    };


    HandleSubmit = (e) => {
        e.preventDefault(); //linkteki sorguyu engeller

        let form = e.target;

        let url = "http://localhost:55991/api/Company/CompanyVehicleAdd";


        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Username: form.Username.value,
                Password: form.encryptedText.value,

            })
        })
            .then(res => res.json())
            .then((result) =>
            {
                alert('result: ' + result)
                this.props.onClose()
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
        let decryptedText = decrypt(encryptedText);



        return (
            <div className="justify-content-center">
                <Container>

                    <h1>Manager Panel</h1>

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
                                type="text"
                                placeholder="Password"  onChange={this.onChange} name="pureText"
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label></Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder=""
                                name="encryptedText"
                                required
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

            </div>
        )

    }
}

export class Demo extends Component {

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


