import React,{Component} from 'react'
import {Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap'
import { Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import { header, body, customLabels, options } from '../../testdata/missedreport'
import Fullscreen from "react-full-screen";
import ReportTable from '../components/ReportTable'
import { postToServer } from '../../lib/comm-utils'
import Dropdown_Control from './Dropdown_Control';
import Text_Control from './Text_Control';
import Date_Control from './Date_Control';
const x = {}
class ReportInfo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            date: new Date,
            isFull:false, 
            Dropdown_data:[],
            report_header:[],
            ReportControl:[],
            data_value:'',
            Relatedcontrol:'',
            testnew:'',
            ctrl_name:'',
            onchangeparameter:'',
            priority_id:'',
            report_id:'',
            report_parameter:'',
        }
        this.dateChanged = this.dateChanged.bind(this);  
        this.handleViewChange = this.handleViewChange.bind(this)
        this.handle_parent = this.handle_parent.bind(this)
        this.ctrl_name= new Set()
    }

    handle_parent(data_result,relatedctl,controlid,parameter,priority_id){
        x[controlid] = data_result
        this.setState({ 
            data_value:data_result,
            Relatedcontrol:relatedctl,
            onchangeparameter:parameter,
            testnew: x,
            priority_id:priority_id,
        });
    /// console.log(x,"datta")       
    } 
    dateChanged(d){ 
        this.setState({date: d});
    }
    handleViewChange(){ 
        this.setState({isFull:!this.state.isFull })
    }
    componentDidMount() {
        this.report_controls();
        //this.reportview();
    }
    report_controls(){
        const _this = this
        var data ={"id":this.props.reportid,  "Token": "sfa360|MR1(Salem)|MR1|TNH0012|AIAaDdKtMMZSQSxbEwU2019-05-02T11:33:51+05:30"}
        const result1 = postToServer("ReportControlAdd", data).then(function (result) {
        if (result.data.length>0 && result.data!=null ) {
            _this.setState({ReportControl:result.data })
            _this.getcolumns();
        } 
        // _this.setState({ReportControl:result.data })
        // console.log(result.data,"report_controls - reportinfo.js")
        // this.getcolumns();
        })
    }
    getcolumns() {
        this.state.ReportControl.map((datacol) => {
        this.ctrl_name.add(datacol.c_label_display)
        })
        console.log (this.ctrl_name, "Control Name- report info.js")
    }
    
    data_view(){
       // alert(this.props.reportid +this.props.reportparameter)
        for (var ctrl of this.ctrl_name) {
            if (this.state.testnew[ctrl]==undefined){
              alert(ctrl + " - Value not Selected ............")
              return;
            }
        }
          var datalist ='';
          var mainvalue='';   
          var arrayvalue='';
         ////////      Parameter Checking ................
          for (var pram of this.props.reportparameter.split(',')){ 
              mainvalue=pram + ",";
              for (var ctrl of this.ctrl_name) {
                    if (pram==ctrl) {
                        if (this.state.testnew[ctrl]!=undefined){
                        datalist=  this.state.testnew[ctrl] + ",";
                        }else {
                        datalist= "' ',";
                        }
                        mainvalue=datalist; 
                    }
                }
              arrayvalue=arrayvalue + mainvalue;   
            }
          arrayvalue= arrayvalue.substring(0, arrayvalue.length - 1);
          console.log (arrayvalue,' :report passing Parameter Value  ')
          this.report_view(arrayvalue)
    }

    report_view(parameter){
        const _this = this
        var data = {"id":this.props.reportid ,"index":"3", "parameter":parameter, "Token": "sfa360|MR1(Salem)|MR1|TNH0012|AIAaDdKtMMZSQSxbEwU2019-05-02T11:33:51+05:30"   }
        const result1 = postToServer("ReportDynamicDropdownQuery", data).then(function (result) {
        const columns = Object.keys(result.data[0]).map((key, id)=>{
        return { "title": key, "prop": key,"filterable": true } })
        _this.report_show(result.data,columns);
        })
    }
    report_show(result,header){
        if (result.length>0) {
            this.setState({ Dropdown_data: result,report_header:header });
        }
    }

render(){
    
    return(
            <React.Fragment>
                <div className="reportPad">
                {
                    <Row>
                        {
                            this.state.ReportControl.map((data) => {

                                if (data.c_display_type == "Dropdown") {
                                    return  <Col key={data.n_id} lg={3} md={3} sm={6} xs={12} className="colpad16 singledropdown">
                                                <Dropdown_Control name={data.c_label_display} 
                                                    datafull={data} 
                                                    realated={this.state.Relatedcontrol}
                                                    testnew={this.state.testnew}
                                                    ctl_value={this.ctrl_name}
                                                    parameter={this.state.onchangeparameter}
                                                    priorityid={this.state.priority_id}
                                                    result={this.state.data_value}                              
                                                    handle_child={this.handle_parent}
                                                />
                                            </Col>
                                }
                                if (data.c_display_type == "Text" || data.c_display_type == "RichTextBox") {  
                                    return <Col key={data.n_id} lg={3} md={3} sm={6} xs={12} className="colPad">
                                        <Text_Control name={data.c_label_display}  />
                                    </Col>
                                }
                                if (data.c_display_type == "Date") {
                                    return  <Col key={data.n_id} lg={3} md={3} sm={6} xs={12} className="colPad">   
                                        <Date_Control 
                                            name={data.c_label_display}
                                            datafull={data}
                                            handle_child={this.handle_parent} 
                                         />
                                        </Col>
                                }
                            })
                        }
                            <Row>
                                <Col lg="2" md="2" sm="2" xs="6" className="colpad16 goButtonpad">
                                    <button className="primary"  onClick={() => this.data_view()} >Go</button>
                                </Col>
                            </Row>
                    </Row>
                }
                    <div className=" marginTop21 dcr-list-sec" >
                        <div className={this.state.isFull ? "fullscreenView" : ''} >
                            <div className="full-screenable-node">
                                <div className="flex-row">
                                    {/* <div className="docName">Amit Kumar(Jayanagar)</div> */}
                                    {this.state.closeButton ? 
                                    <div className="docName" onClick={this.closeFullscreen}><img src="../public/assets/images/close.png" /></div> : null}
                                    <div className="sumrydate">
                                        <span className="paddRight">
                                            {
                                            this.state.isFull ? 
                                            <img src="../public/assets/images/calendar.svg" alt="fullscreen_img" onClick={this.handleViewChange} /> : 
                                            <img src="../public/assets/images/fullscreen.svg" alt="fullscreen_img" onClick={this.handleViewChange} />
                                            }
                                        </span>
                                        {/* <span>09/01/2019 to 27/04/2019</span> */}
                                    </div>
                                </div>
                                <div className="listSection" >
                                    <ReportTable 
                                        tableHeader={this.state.report_header}
                                        tableBody={this.state.Dropdown_data}
                                        keyName="userTable"
                                        tableClass="striped hover table-responsive"
                                        rowsPerPage={10}
                                        rowsPerPageOption={[10, 15, 20]}
                                        initialSort={{prop: "username", isAscending: true}}
                                        labels={customLabels}       
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                                        
            </React.Fragment>
            );
    }
}
export default ReportInfo

