import React ,{Component} from 'react'
import {Breadcrumb,Dropdown} from 'react-bootstrap'
import ReportInfo from '../components/ReportInfo'
import ExportDropdown from '../components/ExportDropdown'
import {FormattedMessage} from 'react-intl';
import { postToServer } from '../../lib/comm-utils'
class Report extends Component{
    constructor(props){
        super(props);
        this.state={
            fullscreenImg:true,
            closeButton:false,
            isFull: false,
            report_header_name:'',
            report_parameter:'',
            report_id:"4"
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

    componentDidMount() {
        this.ReportHeaderName();
    }

    ReportHeaderName(){
    const _this = this
    var data ={"id":this.state.report_id,  "Token": "sfa360|MR1(Salem)|MR1|TNH0012|AIAaDdKtMMZSQSxbEwU2019-05-02T11:33:51+05:30"}
    const result1 = postToServer("ReportHeaderName", data).then(function (result) {
        _this.setState({
            report_header_name:result.data[0].C_ReportHeaderName,
            report_parameter:result.data[0].parameter
        })
        console.log(result.data,"Report Header and parameter- report.js")
        // alert(_this.state.report_parameter)
    })
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
                                {this.state.report_header_name}
                            </h4>
                        </div>
                        <div>
                            <Breadcrumb className="dcr-breadcrumb">
                                {/*<div className="exportBtn"><img src="../public/assets/images/export_white.svg" className="exportImgPad" />export All</div>*/}
                                <ExportDropdown />
                                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
                                <Breadcrumb.Item active> {this.state.report_header_name} </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    
                    <div className="dcr-list-sec chemistTab">
                        <ReportInfo 
                            reportparameter={this.state.report_parameter} 
                            reportid={this.state.report_id} 
                        />
                    </div>
                    
                </div>
                );
    }
    
}
export default Report

