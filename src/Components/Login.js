import React, { Component } from 'react'


export class Login extends Component {

    SetData = () =>
    {
        //local storage
        let myObj = {name : 'Fatih', surname : 'Hazir'}
        // localStorage.setItem('myData', JSON.stringify(myObj))

        //session storage
        sessionStorage.setItem('myData', JSON.stringify(myObj))
    }

    GetData = () =>
    {
        //local storage
        // let data = localStorage.getItem('myData')
        // data = JSON.parse(data)
        // console.log(data.name)

        //session storage
        let data = sessionStorage.getItem('myData')
        data = JSON.parse(data)
        console.log(data)
    }




    render() {



        return (
            <div className="nt-5 d-flex justify-content-left">
                <h1>Login</h1>


            </div>
        )
    }
}
