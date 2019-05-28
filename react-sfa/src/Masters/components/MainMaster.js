//import * as React from 'react';
//import React, { Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Label from './Label'
import Togal from './Toggle'
import Dropdown1 from './Dropdown'
import Date_Control from './Date_Control'
import { Dropdown } from 'semantic-ui-react'
import { CheckBox } from '../../node_modules/@syncfusion/ej2-buttons';
import { postToServer } from '../lib/comm-utils'
import { Row, Col, Container, Form, InputGroup, FormControl } from 'react-bootstrap'
import Button from './Button';
import CustomTable from './CustomTable'
import {Breadcrumb} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
const x = {}
class MainMaster extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            BackEndData: [],
            tableheader: '',
            listsate:false, 
            date: new Date,
            ctl_name:'',
            data_value:'',
            Relatedcontrol:'',
            testnew: {},
        };
        this.handleLanguage= this.handleLanguage.bind(this);
        this.Changelist=this.Changelist.bind(this)
        this.dateChanged = this.dateChanged.bind(this);
    }

    dateChanged(d){ 
        this.setState({date: d});
    };

   // handleLanguage = (data_result,ColumnName,ControlID,srno,odr) =>{
    handleLanguage(data_result,ColumnName,ControlID,dd){
        //this.setState({ timeone: date });
        alert(data_result+ "  " + ColumnName + "  " + dd )
        this.setState({ 
            data_value:data_result,
            Relatedcontrol:ControlID ,
            testnew: x,
        });
        x[ColumnName] = data_result
    /// console.log(x,"datta")       
    } 

    data_save(){
    alert("ccccc")
    }

    Changelist(){
        if(this.state.listsate){
            this.setState({listsate:false})
        }else{
        this.setState({listsate:true})
        }
    };

    componentDidMount() {
        var data = { "index": "Master", "TableName": "20", "Query": "", "Token": "ADMIN|17A1B01|A1H0009|QgTOWnDhMPZqMBlgje2019-02-22T14:38:06+05:30", "ColumnName": "0", "Key_ID": "0" }
        const _this = this
        const result1 = postToServer("SfaApi", data).then(function (result) {
            _this.setState({
                BackEndData: result.data.Header.Other,
                tableheader: result.data.Header.Header
            })
            console.log(result.data.Header.Other, _this.state.BackEndData)
        })
    };

    render() {
       // const data = this.state.Relatedcontrol
        return(
       
            <div className="leftpad">
                {/* <div   className="page-title">
                    <h3><b>{this.state.tableheader}</b></h3>
                </div> */}

                {
                    // <Container>
                        <Row>
                            {
                                this.state.BackEndData.map((res) => {
                                    if (res.Visible == "true" && (res.DisplayType == "Text" || res.DisplayType == "RichTextBox")) {  
                                        return <Col key={res.Id} lg={3} md={3} sm={6} xs={12} className="colPad">
                                            <Text name={res.LabelDisplay} mandatory={res.Mandatory} />
                                        </Col>
                                    }
                                    if (res.Visible == "true" && res.DisplayType == "Dropdown") {
                                        return <Col  key={res.Id} lg={3} md={3} sm={6} xs={12} className="colPad">
                                            <Dropdown1 name={res.LabelDisplay} 
                                            datafull={res} 
                                            realated={this.state.Relatedcontrol} 
                                            result={this.state.data_value}                              
                                            onSelectLanguage={this.handleLanguage}
                                           />
                                        </Col>
                                    }
                                    if (res.Visible == "true" && res.DisplayType == "radio") {
                                        // var x=''
                                        // for (var pram of res.DisplayName.split(',') )  { 
                                        //       x=<Col key={res.Id} md={5} xl={4} className="mb-3"> <Radio name={pram} /> </Col>
                                        // }
                                        // return x
                                        return <Col lg={3} md={3} sm={6} xs={12} className="colPad toggleSwitch"> 
                                        <Radio caption ={res.LabelDisplay} name={res.DisplayName}/> 
                                         </Col>
                                    }
                                    if (res.Visible == "true" && res.DisplayType == "date") {
                                        return  <Col key={res.Id} lg={3} md={3} sm={6} xs={12} className="colPad">   
                                            <Date_Control name={res.LabelDisplay} />
                                            </Col>
                                    }
                                    if (res.Visible == "true" && res.DisplayType == "checkbox") {
                                        return  <Col key={res.Id} lg={3} md={3} sm={6} xs={12} className="colPad"> 
                                        <Checkbox caption ={res.LabelDisplay} name={res.DisplayValue} />    
                                       </Col>
                                        // <Col key={res.Id} md={5} xl={4} className="mb-3"> 
                                    }
                                })
                            }
                        </Row>
                    // </Container>
                }
                           <Row>
                        <Col lg={6} md={6} sm={6} xs={12} className="colPad">
                            <button  className="primaryBtnPad mr-2 mb-2 " onClick={() => this.data_save()} >Save</button>
                            <button className="danger danger-outline mr-2 mb-2 padleft">Cancel</button>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="colPad"></Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="colPad"></Col>
                       
                    </Row>
            </div>
            
        )
    }
}
export default MainMaster;