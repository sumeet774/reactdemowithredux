import React, { Component } from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'

 class UserDetail extends Component {
  render() {
    return (
        <div>
            <div className="doctorimagerow2">
                <div className="imagedotcon imagedotcon2">
                    <div className="greendot"></div>
                    <img className="innerframe" src="../public/assets/images/doctoravatar.jpg"/>
                    <img className="frame" src="../public/assets/images/frame200.png"/>
                    <img className="diamond" src="../public/assets/images/diamond.png"/>
                </div>
                <div className="imagenamebox2">
                    <Row className="docdetails nomar0">
                        <div className="nopad0 emp_name col-12">Kelly Martin </div>
                        <div className="nopad0 col-12 docdetail">Medical Representative at <span className="bluetext">Alkem, Inc.</span></div>
                        <div className="nopad0 col-12 docdetail">Emp Code: C298978</div>
                        <div className="nopad0 col-12 docdetail">San Francisco, California</div>
                        <div className="nopad0 col-12 empdetails">Lorem ipsum dolor sit amet, ipsum dolor consectetuer adipiscing elit... 
                        <span className="bluetext">Read More</span></div>
                    </Row>
                </div>
            </div>
            {/* <Legal/>
            <Address/> */}
        </div>
    )
  }
}

export default UserDetail


