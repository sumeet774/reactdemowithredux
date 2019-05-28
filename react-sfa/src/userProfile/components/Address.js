import React, {Component} from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'

class Address extends Component{
    render(){
        return(
            <div className="palletback pallet2">
                <Row>
                    <Col xs={12}>
                        <div className="pbartitle">ADDRESSES</div>
                    </Col>
                    <Col xl={12} xs={12}>
                        <div className="pbartitle2">HQ Address</div>
                        <div className="value2">69, 2nd Floor, Al-ameen towers, Lal Bagh Main Road, Near, Hosur 
                            Main Road, Sudhama Nagar, Bengaluru, Karnataka 560027</div>
                    </Col>
                    <Col xl={12} xs={12}>
                        <div className="pbartitle2">Personal Address</div>
                        <div className="value2">69, 2nd Floor, Al-ameen towers, Lal Bagh Main Road, Near, Hosur 
                            Main Road, Sudhama Nagar, Bengaluru, Karnataka 560027</div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Address