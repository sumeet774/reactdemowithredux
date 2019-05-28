import React ,{Component} from 'react'
import {Breadcrumb,Dropdown} from 'react-bootstrap'

import DcrSummaryInfo from '../components/DcrSummaryInfo'
import ExportDropdown from '../components/ExportDropdown'
import {FormattedMessage} from 'react-intl';

class DcrSummaryReport extends Component{
    constructor(props){
        super(props);
        this.state={
            fullscreenImg:true,
            closeButton:false,
            isFull: false,
            
        }
     
       // this.closeFullscreen =  this.closeFullscreen.bind(this)
          this.goFull =  this.goFull.bind(this)
    }
    goFull(){
        this.setState({ 
            isFull: true,
            fullscreenImg:false,    
        });
    }
    
    render(){
    
        return(
                <div className="content-spacing">
                    <div className="dcr-head">
                        <div>
                            <h4 className="daily-call-report">
                            	{/*<FormattedMessage
                                    id={ 'DCR.heading' }
                                    defaultMessage={ 'DCR Summary Report' }
                                />*/}
                                DCR Summary Report
                            </h4>
                        </div>
                        <div>
                            <Breadcrumb className="dcr-breadcrumb">
                                {/*<div className="exportBtn"><img src="../public/assets/images/export_white.svg" className="exportImgPad" />export All</div>*/}
                                <ExportDropdown />
                                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
                                <Breadcrumb.Item active>DCR Summary Report</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    
                    <div className="dcr-list-sec chemistTab">
                        <DcrSummaryInfo />
                    </div>
                    
                </div>
                );
    }
    
}
export default DcrSummaryReport

