import React, { Component } from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'

class ContactAndPersonalInfo extends Component {
  render() {
    return (
        <div className="palletback pallet2">
            <Row>
            <Col xs={12}>
            <div className="pbartitle">CONTACT & PERSONAL INFO</div>
            </Col>
            <Col xl={6} xs={6}>
            <div className="pbartitle2">Mobile Number</div>
            <div className="value2">+91- 9087676540</div>
            </Col>
            <Col xl={6} xs={6}>
            <div className="pbartitle2">E-mail Address</div>
            <div className="value2">Kelly.martin@alkem.com</div>
            </Col>
            <Col xl={6} xs={6}>
            <div className="pbartitle2">Date Of Birth</div>
            <div className="value2">09/09/1993</div>
            </Col>
            <Col xl={6} xs={6}>
            <div className="pbartitle2">PAN Number</div>
            <div className="value2">BSIPD7876P</div>
            </Col>
            <Col xl={6} xs={6}>
            <div className="pbartitle2">Date Of Wedding</div>
            <div className="value2">09/09/2020</div>
            </Col>
            <Col xl={6} xs={6}>
            <div className="pbartitle2">Qulification</div>
            <div className="value2">B.com</div>
            </Col>
            </Row>
      </div>
    )
  }
}

export default ContactAndPersonalInfo
