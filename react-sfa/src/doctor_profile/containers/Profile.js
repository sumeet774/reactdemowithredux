import React, {Component} from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl'

import { getDoctorDetail } from '../../actions/DoctorProfile'

import BusinessInfo from '../components/BusinessInfo'
import DissDropDown from '../components/DissDropDown'

import "../../../public/assets/font-awesome/css/font-awesome.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"

const messages = defineMessages({
    title: {
        id: 'doctor_profile.container.profile',
        defaultMessage:'Doctor Profiles'
    }
})

export class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: ''
    }
    this.getDoctor = this.getDoctor.bind(this)
}
  componentDidMount(){
    this.getDoctor()
}
getDoctor(){
    var data ={
          "index": "Profile",
          "Result":"0",
          "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
          "TableName": "",
          "ColumnName": "",
          "Data": [
            {
              "doc":"D000001",
              "year": "2018",
              "month": "7",
              "Result":"1"
            }
          ]
          }
        this.props.getDoctorDetail(data)
}

static getDerivedStateFromProps(nextProps, prevState) {
  if (prevState.data !== nextProps.data)
      //console.log("completed", nextProps.data)
      return {...prevState, data:nextProps.data}
  return null
}

  render() {
    // const {data} = this.state
    const { intl } = this.props
    return (
      <div className="content-spacing">
        <div className="dcr-head">
            <div>
                <h4 className="daily-call-report">{intl.formatMessage(messages.title)}</h4>
            </div>
            <div>
                <Breadcrumb className="dcr-breadcrumb">
                  <DissDropDown />
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active>Doctor Profile</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
        {this.state.data ? (
                  this.state.data.map((docdata, index) => (
        <div className="profilecontainer" key={index}>
            <div className="firstrow">
                    <Row>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="doctorimagerow">
                          <div className="borderright">
                            <div className="imagedotcon">
                                <div className="greendot"></div>
                                <img className="innerframe" src="../public/assets/images/doctoravatar.jpg"/>
                                <img className="frame" src="../public/assets/images/frame200.png"/>
                                <img className="diamond" src="../public/assets/images/diamond.png"/>
                              </div>
                              <div className="imagenamebox">
                                <Row className="docdetails nomar0">
                                  <div className="nopad0 dr_name col-12">{docdata.DSCName}</div>
                                    <div className="nopad0">
                                      <div className="drrectac">{docdata.DSCcode}</div>
                                    </div>
                                    <div className="nopad0">
                                      <div className="drrectac">Grade: {docdata.DoctorGrade}</div>
                                    </div>
                                    <div className="nopad0 col-12 docdetail">{docdata.Category}</div>
                                    <div className="nopad0 col-12 docdetail">{docdata.DSCQualification}</div>
                                    <div className="nopad0 col-12 markerdetail"><i className="fa fa-map-marker" aria-hidden="true"></i>  {docdata.AreaName}({docdata.SubareName})</div>
                                </Row>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="sideinfo">
                        <Row>
                            <div className="col-xl-5 col-md-5 col-sm-5 col-5 lefthead">Registration Number:</div>
                            <div className="col-xl-7 col-md-5 col-sm-7 col-6 rightval">{docdata.RegistrationNumber ? docdata.RegistrationNumber : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                            <div className="col-xl-5 col-md-5 col-sm-5 col-5 lefthead">Date Of Birth:</div>
                            <div className="col-xl-7 col-md-5 col-sm-7 col-6 rightval">{docdata.DOB ? docdata.DOB : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                            <div className="col-xl-5 col-md-5 col-sm-5 col-5 lefthead">Age:</div>
                            <div className="col-xl-7 col-md-5 col-sm-7 col-6 rightval">{docdata.DoctorAge ? docdata.DoctorAge : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                            <div className="col-xl-5 col-md-5 col-sm-5 col-5 lefthead">E-mail:</div>
                            <div className="col-xl-7 col-md-5 col-sm-7 col-6 rightval">{docdata.DoctorEmailId ? docdata.DoctorEmailId : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                            <div className="col-xl-5 col-md-5 col-sm-5 col-5 lefthead">Mobile Number:</div>
                            <div className="col-xl-7 col-md-5 col-sm-7 col-6 rightval">{docdata.MobileNumber ? docdata.MobileNumber : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                            <div className="col-xl-5 col-md-5 col-sm-5 col-5 lefthead">Landline Number:</div>
                            <div className="col-xl-7 col-md-5 col-sm-7 col-6 rightval">{docdata.DoctorLandlineNumber ? docdata.DoctorLandlineNumber : <div><p className="dash"></p><p className="dash"></p></div>}</div>
                          </Row>
                      </div> 
                    </div>
                  </Row>
            </div>
                <BusinessInfo  info={docdata} />  
            </div>     
            ))
            ) : null}   
          </div>
    )
  }
}

const mapStateToProps = state =>({ 
  data:state.DOCTOR.data
})

const mapDispatchToProps = dispatch => ({
  getDoctorDetail:(data) => dispatch(getDoctorDetail(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(injectIntl(Profile));

