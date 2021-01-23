import React, {Component} from 'react';
import {useState, useEffect} from 'react';


export class RentCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vehicle : {}

        };
    }


    componentDidMount =async  () => {
        let url = "http://localhost:55991/api/Vehicle/VehicleFind/" + this.props.match.params.id
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        this.setState({
            Vehicle : data
        })
    }

    render() {
        const { Vehicle } = this.state
        return (
            <div>
                {Vehicle.Brand}
            </div>
        );
    }
}

