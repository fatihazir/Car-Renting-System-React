import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class ManageStaff extends Component {
    render() {
        console.log(this.props.hostPort)
        return (
            <div className="nt-5 d-flex justify-content-left">
                <h1>manage staff</h1>
                <Button variant="primary">Tıkla</Button>
                <Button variant="flat" size="xxs">flat button </Button>
                <a href="/companypanel"><Button variant="flat" size="xxs">Sirket paneli</Button></a>
               
                
            </div>
        )
    }
}
