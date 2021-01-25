import React, { Component } from "react";
import {
  Card,
  CardColumns,
  Button
} from "react-bootstrap";


let dataOfManager = sessionStorage.getItem('Manager')
let Manager = JSON.parse(dataOfManager)

let dataOfStaff = sessionStorage.getItem('Staff')
let Staff = JSON.parse(dataOfStaff)


export class CompanyPanel extends Component {

  render() {

    if(Manager){
      return (
          <div>
          <CardColumns className="justify-content-center">

            <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '25rem'}}>

              <Card.Body>
                <Card.Title>My Staff</Card.Title>
                <Card.Text>
                  <br/>
                </Card.Text>
                <a style={{float:'left', marginBottom : '1rem'}} href="/managestaff"><Button variant="flat" size="xxs">Manage Staff</Button></a>
              </Card.Body>
            </Card>

            <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '30rem'}}>

              <Card.Body>
                <Card.Title>My Company</Card.Title>
                <Card.Text>
                  <br/>
                </Card.Text>
                <a style={{float:'left', marginBottom : '1rem'}} href="/managecompany"><Button variant="flat" size="xxs">Manage Company</Button></a>
              </Card.Body>
            </Card>

          </CardColumns>
            <CardColumns className="justify-content-center">
              <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '25rem'}}>

                <Card.Body>
                  <Card.Title>My Vehicles</Card.Title>
                  <Card.Text>
                    <br/>
                  </Card.Text>
                  <a style={{float:'left', marginBottom : '1rem'}} href="/managevehicle"><Button variant="flat" size="xxs">Manage vehicles</Button></a>
                </Card.Body>
              </Card>


              <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '30rem'}}>

                <Card.Body>
                  <Card.Title>Rezervations</Card.Title>
                  <Card.Text>
                    <br/>
                  </Card.Text>
                  <a style={{float:'left', marginBottom : '1rem'}} href="/managerezervations"><Button variant="flat" size="xxs">Manage Company</Button></a>
                </Card.Body>
              </Card>
            </CardColumns>
          </div>


      );
    }else if(Staff){
      return (
          <div>
            <CardColumns className="justify-content-center">

            </CardColumns>
            <CardColumns className="justify-content-center">
              <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '25rem'}}>
                <Card.Img variant="top" src="https://img.lovepik.com/element/40019/3112.png_860.png" />
                <Card.Body>
                  <Card.Title>My Vehicles</Card.Title>
                  <Card.Text>
                    <br/>
                  </Card.Text>
                  <a style={{float:'left', marginBottom : '1rem'}} href="/managevehicle"><Button variant="flat" size="xxs">Manage vehicles</Button></a>
                </Card.Body>
              </Card>


              <Card style={{ width: "30rem", justifyContent:'center', marginLeft: '30rem'}}>
                <Card.Img variant="top" src="https://image.pngaaa.com/413/1203413-middle.png" />
                <Card.Body>
                  <Card.Title>Rezervations</Card.Title>
                  <Card.Text>
                    <br/>
                  </Card.Text>
                  <a style={{float:'left', marginBottom : '1rem'}} href="/managecompany"><Button variant="flat" size="xxs">Manage Company</Button></a>
                </Card.Body>
              </Card>
            </CardColumns>
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
