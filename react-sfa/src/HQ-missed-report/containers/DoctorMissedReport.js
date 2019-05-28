import React, { Component } from 'react'
import {Breadcrumb,Dropdown} from 'react-bootstrap'

import MissedReportInfo from '../components/MissedReportInfo'


class DoctorMissedReport extends Component{
    
    render(){
        return(
                <div className="content-spacing">
                    <div className="dcr-head">
                        <div>
                            <h4 className="daily-call-report">HQ Wise Doctor Missed Report</h4>
                        </div>
                        <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            {/*<div className="exportBtn"><img src="../public/assets/images/export_white.svg" className="exportImgPad" />export All</div>*/}
                            <Dropdown className="exportBtn">
                                <Dropdown.Toggle id="dropdown-basic">
                                    <img src="../public/assets/images/export_white.svg" alt="export_img" className="exportImgPad"/>
                                    <span className="exportAllText">Export All</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="export-dropdown">
                                    <div className="export-ops">
                                        <div className="text-center">
                                            <img src="../public/assets/images/excel.svg" alt="excel"/>
                                            <p>Excel</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="text-center">
                                            <img src="../public/assets/images/pdf.svg" className="pdf" alt="excel"/>
                                            <p>PDF</p>
                                        </div>
                                        <div className="line"></div>
                                        <div className="text-center">
                                            <img src="../public/assets/images/print.svg" alt="excel"/>
                                            <p>Print</p>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
                            <Breadcrumb.Item active>HQ wise doctor missed report</Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                    </div>
                    <MissedReportInfo />
                </div>
                );
    }
}
export default DoctorMissedReport

