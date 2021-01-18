import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class CompanyPanel extends Component {
    render() {
        return (
            <div className="nt-5 d-flex justify-content-left">
                <h1>Company</h1>
                <Button variant="primary">Tıkla</Button>
                <Button variant="flat" size="xxs">flat button </Button>
            </div>
        )
    }
}
