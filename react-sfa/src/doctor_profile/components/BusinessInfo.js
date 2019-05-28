import React, {Component} from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'

import ClinicAddress from './ClinicAddress'
import "../../../public/assets/font-awesome/css/font-awesome.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"


class BusinessInfo extends Component{
constructor(props){
  super(props);
  //console.log(props);
}
    render(){
        return(
            <Row className="secondrow">
              <Col xl={5} md={5} sm={12} xs={12} className="paddr10">
                <div className="secondrow-first">
                  <Row>
                  <Col xs={12}>
                    <div className="iconbar">
                      <img src="../public/assets/images/portfolio.svg" className="barimage"></img> <div className="bartitle nomar0">BUSINEES  INFO</div>
                    </div>
                  </Col>
                  <Col xs={6} className="infobox nopad0">
                    <div className="info">No. of patient per day</div>
                    <div className="value">{this.props.info.NoOfPatientsPerDay ? this.props.info.NoOfPatientsPerDay : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                  </Col>
                  <Col xs={6} className="infobox nopad0">
                    <div className="info">Current Businees</div>
                    <div className="value"><span className="spanvalue">{this.props.info.CurrentBusiness ? this.props.info.CurrentBusiness +'/-' : <div><p className="dash"></p><p className="dash"></p></div>}</span>   
                      <Dropdown className="valuedropstart">
                          <Dropdown.Toggle className="valuedrop" id="dropdown-basic">
                              <img className="dropimage" src="../public/assets/images/dropellipsis.svg"/>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="column-dropdown">
                              <h5 className="drop-head">Columns to be shown</h5>
                              
                          </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col xs={6} className="infobox nopad0">
                    <div className="info">Business Potential</div>
                    <div className="value">{this.props.info.BusinessPotential ? this.props.info.BusinessPotential+'/-' : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                  </Col>
                  <Col xs={6} className="infobox nopad0">
                    <div className="info">Doctor Prescribing</div>
                    <div className="value">{this.props.info.DoctorPrescription ? this.props.info.DoctorPrescription : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                  </Col>
                  <Col xs={6} className="infobox nopad0">
                    <div className="info">Doctor Purchasing</div>
                    <div className="value">{this.props.info.DrPurschse ? this.props.info.DrPurschse : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                  </Col>
                  </Row>
                </div>
                <ClinicAddress />
              </Col>
              <Col xl={7} md={7} sm={12} xs={12} className="paddl10 order-xs-12">
                <div className="secondrow-first">
                  <Row>
                    <Col xs={12} className="iconbar">
                    <img src="../public/assets/images/hospital.svg" className="barimage"></img> <div className="bartitle nomar0">CLINIC ADDRESS</div>
                    </Col>
                    <Col xl={4} xs={6} className="infobox nopad0">
                    <div className="info">Clinic/Hospital Name</div>
                    <div className="value">{this.props.info.AreaName ? this.props.info.AreaName : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                    </Col>
                    <Col xl={4} xs={6} className="infobox nopad0">
                    <div className="info">Clinic Area</div>
                    <div className="value">{this.props.info.AreaName ? this.props.info.AreaName : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                    </Col>
                    <Col xl={4} xs={6} className="infobox nopad0">
                    <div className="info">Clinic Subarea</div>
                    <div className="value">{this.props.info.SubareName ? this.props.info.SubareName : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                    </Col>
                    <Col xl={12} xs={12} className="infobox nopad0">
                    <div className="info">Address</div>
                    <div className="value">{this.props.info.Address1 ? this.props.info.Address1+this.props.info.Address2+this.props.info.Address3+this.props.info.Address4 : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                    </Col>
                    <Col xl={4} xs={6} className="infobox nopad0">
                    <div className="info">Pin Code</div>
                    <div className="value">{this.props.info.Pincode ? this.props.info.Pincode : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                    </Col>
                    </Row>
                </div>
              </Col>
        </Row>
        )
    }
}
export default BusinessInfo