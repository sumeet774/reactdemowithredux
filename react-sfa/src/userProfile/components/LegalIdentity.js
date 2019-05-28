import React,{Component} from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'

class LegalIdentity extends Component
{
    render(){
        return(
            <div className="palletback pallet2">
                <Row>
                    <Col xs={12}>
                        <div className="pbartitle">LEGAL IDENTITIES</div>
                    </Col>
                    <Col xl={4} xs={6}>
                        <div className="pbartitle2">PAN Number</div>
                        <div className="value2">+91- 9087676540</div>
                    </Col>
                    <Col xl={4} xs={6}>
                        <div className="pbartitle2">Aadhar Number</div>
                        <div className="value2">+91- 9087676540</div>
                    </Col>
                    <Col xl={4} xs={6}>
                        <div className="pbartitle2">Account Number</div>
                        <div className="value2">+91- 9087676540</div>
                    </Col>
                    <Col xl={4} xs={6}>
                        <div className="pbartitle2">Branch Name</div>
                        <div className="value2">Jayanagar 4th Block</div>
                    </Col>
                    <Col xl={4} xs={6}>
                        <div className="pbartitle2">ESI Number</div>
                        <div className="value2">123456</div>
                    </Col>
                    <Col xl={4} xs={6}>
                        <div className="pbartitle2">RTGS Number</div>
                        <div className="value2">SB02000101</div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LegalIdentity

