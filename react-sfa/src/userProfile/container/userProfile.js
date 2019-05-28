import React, {Component} from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'

import ContactAndOffice from '../components/ContactAndOfficialInfo'
import UserDetails from '../components/UserDetail'
import Legal from '../components/LegalIdentity'
import Address from '../components/Address'
import ContactAndPersonal from '../components/ContactAndPersonalInfo'

import "../../../public/assets/font-awesome/css/font-awesome.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: ''
    }
}

  render() {

    return (
      <div className="content-spacing">
            <div className="dcr-head">
                <div>
                    <h4 className="daily-call-report">MY PROFILE</h4>
                </div>
                <div>
                    <Breadcrumb className="dcr-breadcrumb">
                        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>My Profile</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="profilecontainer">
            <Row className="secondrow">
                <Col xl={7} md={7} sm={12} xs={12} className="paddr10">
                    <UserDetails/>
                    <Legal/>
                    <Address/>
                </Col>
              <Col xl={5} md={5} sm={12} xs={12} className="paddl10 order-xs-12">
                <ContactAndOffice/>
                <ContactAndPersonal/>
              </Col>
        </Row>
            </div>        
        </div>
    )
  }
}


export default UserProfile

