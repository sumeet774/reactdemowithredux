import React , { Component } from 'react' 

import {Row, Col} from 'react-bootstrap'

function BusinessInfo(props){
    const {
        DocterDetails 
    } = props
    return(
        <div className="visit-container">
            <div className="display-inline">
                <div className="visit-img-sec">
                    <img src="../../public/assets/images/business.svg" alt="business_img"/>
                </div>
                <div className="visit-info-sec">
                    <h3 className="container-head">BUSINESS INFO</h3>
                    <Row>
                        <Col xl={6}>
                            <p className="list-head">No. of patient per day</p>
                            <p className="list-text">{DocterDetails[0].NoOfPatientsPerDay}</p>
                        </Col>
                        <Col xl={6}>
                            <p className="list-head">Current Business</p>
                            <p className="list-text">{DocterDetails[0].CurrentBusiness}/-</p>
                        </Col>
                        <Col xl={6}>
                            <p className="list-head">Business Potential</p>
                            <p className="list-text">{DocterDetails[0].BusinessPotential}/-</p>
                        </Col>
                        <Col xl={6}>
                            <p className="list-head">Docter Prescribing</p>
                            <p className="list-text">{DocterDetails[0].DoctorPrescription}</p>
                        </Col>
                        <Col xl={6}>
                            <p className="list-head">Docter Purchasing</p>
                            <p className="list-text">{DocterDetails[0].DrPurschse}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default BusinessInfo