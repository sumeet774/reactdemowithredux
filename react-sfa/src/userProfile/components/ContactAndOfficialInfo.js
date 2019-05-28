import React, { Component } from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'



class ContactAndOfficialInfo extends Component {
  render() {
    return (
        <div>
            <div className="palletback pallet2">
              <Row>
                <Col xs={12}>
                  <div className="pbartitle">CONTACT & OFFICIAL INFO</div>
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
                  <div className="pbartitle2">Reporting Manager</div>
                  <div className="value2">Kavitha Shetty</div>
                </Col>
                <Col xl={6} xs={6}>
                  <div className="pbartitle2">Department</div>
                  <div className="value2">Sales</div>
                </Col>
                <Col xl={6} xs={6}>
                  <div className="pbartitle2">Employee Type</div>
                  <div className="value2">Permanent</div>
                </Col>
                <Col xl={6} xs={6}>
                  <div className="pbartitle2">FAX Number</div>
                  <div className="value2">+1 323 555 1234</div>
                </Col>
              </Row>
            </div>
        </div>
    )
  }
}

export default ContactAndOfficialInfo
