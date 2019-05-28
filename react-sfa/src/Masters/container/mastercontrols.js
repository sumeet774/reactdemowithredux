import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'
import { Row, Col, Container, Form, InputGroup, FormControl } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Text from '../components/Text'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'
import Label from '../components/Label'
import Togal from '../components/Toggle'
import Dropdown1 from '../components/Dropdown'
import Date_Control from '../components/Date_Control'
import { postToServer } from '../../lib/comm-utils'
import { connect } from 'react-redux';
class Mastercontrols extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controlVal: {},
            hasFetched: true,
            BackEndData: [],
            tableheader: '',
            listsate:false,
            current_child:'',
            tablename:'',
            Edit:{}
        };

       

    }




    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("check",nextProps.header, nextProps.Edit)
         if(prevState.header !== nextProps.header)
             return {...prevState, header:nextProps.header}
         if(prevState.Edit !== nextProps.Edit){
             return {...prevState, Edit:nextProps.Edit}
         }
         return null
     }
 
    updateDropdownSelection(id, childId, childName, value) {
       
        if (childName!="0"  && childName!="" ){

        let { controlVal } = this.state

        let k = Object.keys(controlVal).find((key) => {
            return key == childName
        })
        var data={"id":id, "priority":childId,"onload":"1" ,"control":"Dropdown" ,"index":"2","result":value,"Token": "sfa360|MR1(Salem)|MR1|TNH0012|AIAaDdKtMMZSQSxbEwU2019-05-02T11:33:51+05:30"}
        let _this = this
        postToServer("DynamicMasterQuery", data).then((result)=>{
            let teamsFromApi=[]    
            result.data.map(data => {
                teamsFromApi.push({
                    "key"   :data[Object.keys(data)[0]],
                    "text"  :data[Object.keys(data)[1]],
                    "value" :data[Object.keys(data)[1]]
                })
            })
            console.log("mastercontrol", teamsFromApi)
            controlVal[k]['data']= teamsFromApi
            _this.setState({controlVal})
        })
    }
    }
    //component mount
    componentDidMount() {

        let controlVal = {}
        let _this = this
        var data = { "index": "Master", "TableName": "26", "Query": "", "Token": "Smstest|Kavitha Shetty|FS01|KNH0007|lzOBgZHekf2019-05-10T17:17:02+05:30", "ColumnName": "0", "Key_ID": "0" }
        postToServer("SfaApi", data)

            .then(function (result) {           
                _this.setState({tablename:result.data["Header"].Listdisplay})
                result.data.Header.Other.map((kk)=>{
                    
                    if(kk.DisplayType=="Dropdown"  && kk.OnLoad=="true" ){
                        var datakey = {
                            "id"        :kk.Id,
                            "Token"     :"Smstest|Kavitha Shetty|FS01|KNH0007|lzOBgZHekf2019-05-10T17:17:02+05:30",
                            "priority"  :kk.Priority,
                            "onload"    :"1" ,
                            "control"   :"Dropdown",
                            "index"     :"1"
                        }
                        const teamsFromApi=[]
                        postToServer("DynamicMasterQuery",datakey)
                            .then(function (resultcame) {
                                resultcame.data.map(data => {
                                    teamsFromApi.push({
                                        "key"   :data[Object.keys(data)[0]],
                                        "text"  :data[Object.keys(data)[1]],
                                        "value" :data[Object.keys(data)[1]]
                                    })
                                })
                                let { controlVal } = _this.state
                                controlVal[kk.ColumnName]={
                                    "type"      :kk.DisplayType,
                                    "query"     :kk.SqlQuery,
                                    "Priority"  :kk.Priority,
                                    "id"        :kk.Id,
                                    "child"     :kk.ControlID,
                                    "data"      :teamsFromApi,
                                    "onload"    :"true",
                                    "ReadOnly":kk.ReadOnly,
                                    "dis_name":kk.LabelDisplay,
                                    
                                }
                                _this.setState({controlVal })
                            })
                    }
                    controlVal[kk.ColumnName]={
                        "type"      :kk.DisplayType,
                        "Priority"  :kk.Priority,
                        "id"        :kk.Id,
                        "child"     :kk.ControlID,
                        "dis_name":kk.LabelDisplay,
                        "onload"    :"false",
                        "ReadOnly":kk.ReadOnly,
                        
                        "data"      : [{
                            key     :"-1",
                            text    :"select values",
                            value   :"-1"
                        }]
                    }
                })

                _this.setState({controlVal})
            })
    };


    render() {

        
        if (!this.props.headkey ){
        return null}
        const { controlVal } = this.state
        
       
      
        let columns = Object.keys(controlVal).reduce((p, key, index) =>{
            //console.log("key value is:", key)
            switch (controlVal[key]["type"]) {
                case "Text":
                case "RichTextBox":
                    p.push(
                        <Col  key={index/*//controlVal[key]['id']*/} md={5} xl={3} className="mb-3">
                            <Text     ReadOnly={controlVal[key]["ReadOnly"]} displayname={controlVal[key]["dis_name"]} name={key}/>
                        </Col>
                    )
                    break;
                case "Dropdown":
                    p.push (
                        <Col  key={index/*controlVal[key]['id']*/} md={5} xl={3} className="mb-3">
                            <Dropdown1
                          // ondropdown_index_change={this.ondropdown_index_change}
                                send={''}
                                callparent={''}
                                child={controlVal[key]["child"]}
                                id={controlVal[key]["id"]}
                                Priority={controlVal[key]["Priority"]}
                                dataotipn={controlVal[key]["data"]}
                                name={key}
                                displayname={controlVal[key]["dis_name"]}
                                update={this.updateDropdownSelection.bind(this)}
                             
                            />
                        </Col>
                    )
                    break;
                case "radio":
                    p.push (
                        <Col key={index/*controlVal[key]['id']*/} md={5} xl={3} className="mb-3">
                            <Radio     displayname={controlVal[key]["dis_name"]} name={key} />
                        </Col>
                    )
                    break;
                default:
                    break;
            }
            return p
        },[])

    return (
        <div className="content-spacing">
        <div className="dcr-head">
            <div>
                <h4 className="daily-call-report">{this.state.tablename}</h4>
            </div>
            <div>
            <Breadcrumb className="dcr-breadcrumb">
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item active>{this.state.tablename}</Breadcrumb.Item>
            </Breadcrumb>
            </div>
        </div>
        <div className="dcr-list-sec chemistTab">
        <div className={this.state.isFull ? "fullscreenView" : ''} >
                    <Row>
                        {
                         columns
                        }
                    </Row>
                    </div>
                    <Row className="marginTop21">
                        <Col lg={6} md={6} sm={6} xs={12} className="colPad">
                            <button className="primaryBtnPad  mb-2 ">Save</button>
                            <button className="danger danger-outline mr-2 mb-2 padleft">Cancel</button>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="colPad"></Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="colPad"></Col>
                       
                    </Row>

                </div>x
            </div>
        )

    }
}

const mapStateToProps = state => ({
    data: state.MASTERList.data,
    header: state.MASTERList.header,
    Edit: state.MASTERList.Edit
}  )

const mapDispatchToProps = dispatch => ({
    getMASTERLEdit: (data) => dispatch(getMASTERLEdit(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Mastercontrols)