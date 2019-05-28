import React, { Component } from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'
import { connect } from 'react-redux';

import "../../../public/assets/font-awesome/css/font-awesome.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"

 class ClinicAddress extends Component {
   constructor(props){
     super(props);
     this.state = {
      data: ''
    }
    //console.log(data);
   }
   static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.data !== nextProps.data)
        //console.log("completed", nextProps.data)
        return {...prevState, data:nextProps.data}
    return null
  }
  render() {
    return (
          <div className="secondrow-first">
              {this.state.data ? (
                this.state.data.map((event, index) => (
                <Row key={index}>
                <Col xs={12} className="iconbar">
                  <img src="../public/assets/images/hospital12.svg" className="barimage"></img> <div className="bartitle nomar0">RESIDENTIAL ADDRESS</div>
                </Col>
                <Col xs={6} className="infobox nopad0">
                  <div className="info">House/Building Name</div>
                  {/* <div className="value">{event.Address1 ? event.Address1 : <div><p className="dash"></p><p className="dash"></p></div>}</div> */}
                </Col>
                <Col xs={6} className="infobox nopad0">
                  <div className="info">Residential Area</div>
                  <div className="value">{event.AreaName ? event.AreaName : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                </Col>
                <Col xs={12} className="infobox nopad0">
                  <div className="info">Address</div>
                  <div className="value">{event.Address2 ? event.Address2+event.Address3+event.Address4 : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                </Col>
                <Col xs={6} className="infobox nopad0">
                  <div className="info">Pin Code</div>
                  <div className="value">{event.Pincode ? event.Pincode : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                </Col>
                </Row>
              ))
              ) : null}
          </div>
    )
  }
}
const mapStateToProps = state =>({ 
  data:state.DOCTOR.data
})
export default connect(mapStateToProps)(ClinicAddress);
//export default 
