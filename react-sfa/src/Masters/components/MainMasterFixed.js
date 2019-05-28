import React, { Component } from 'react'
import Text from './Text'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Label from './Label'
import Togal from './Toggle'
import Dropdown1 from './Dropdown'
import { CheckBox } from '../../node_modules/@syncfusion/ej2-buttons';
import { postToServer } from '../lib/comm-utils'
import { Row, Col, Container } from 'react-bootstrap'
import Button from './Button';
import CustomTable from './CustomTable'
import {Breadcrumb} from 'react-bootstrap'


const header = [
    { title: 'DCR No' , prop: 'dcr_no', sortable: true, filterable: true },
    { title: 'DCR Date', prop: 'dcr_name', sortable: true },
    { title: 'Entry Date', prop: 'entry_name', sortable: true },
    { title: 'Place of Work', prop: 'place_of_work', sortable: true },
    { title: 'Docter Visited', prop: 'docter_visited', sortable: true },
    { title: 'Retailer Visited', prop: 'retailer_visited', sortable: true },
    { title: 'Stocklist Visited', prop: 'stocklist_visited', sortable: true },
    { title: 'Additional Docter Visited', prop: 'additional', sortable: true },
]

const body = [
    {
        dcr_no: '123456',
        dcr_name: '01-Apr-19',
        entry_name: '01-Apr-19',
        place_of_work: 'Slik board',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '234567',
        dcr_name: '08-Apr-19',
        entry_name: '08-Apr-19',
        place_of_work: 'Vellore',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '345678',
        dcr_name: '02-Apr-19',
        entry_name: '02-Apr-19',
        place_of_work: 'Ajmer',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '456789',
        dcr_name: '04-Apr-19',
        entry_name: '04-Apr-19',
        place_of_work: 'Kolar',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '567891',
        dcr_name: '03-Apr-19',
        entry_name: '03-Apr-19',
        place_of_work: 'Chennai',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },{
        dcr_no: '678912',
        dcr_name: '07-Apr-19',
        entry_name: '07-Apr-19',
        place_of_work: 'Kochi',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '789123',
        dcr_name: '05-Apr-19',
        entry_name: '05-Apr-19',
        place_of_work: 'E-city',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '891234',
        dcr_name: '09-Apr-19',
        entry_name: '09-Apr-19',
        place_of_work: 'Bangalore',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '912345',
        dcr_name: '06-Apr-19',
        entry_name: '06-Apr-19',
        place_of_work: 'jaipur',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    },
    {
        dcr_no: '951234',
        dcr_name: '10-Apr-19',
        entry_name: '10-Apr-19',
        place_of_work: 'Madiwala',
        docter_visited: '02',
        retailer_visited: '01',
        stocklist_visited: '00',
        additional: '00'
    }
];
  
const customLabels = {
    first: '<<',
    last: '>>',
    prev: '< Prev',
    next: 'Next >',
    show: 'Show',
    entries: 'items/page',
    filterPlaceholder: 'Search for DCR no',
    noResults: 'There is no data to be displayed',
};

class MainMasterFixed extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = ({
            BackEndData: [],
            tableheader: '',
            listsate:false
        });
        this.Changelist=this.Changelist.bind(this)

    }

    Changelist(){

        
        if(this.state.listsate){
            this.setState({listsate:false})
        }else{
        this.setState({listsate:true})
        }

    }

    componentDidMount() {
        // const { match: { params } } = this.props;
        // alert (params.Id)

        var data = { "index": "Master", "TableName": "20", "Query": "", "Token": "ADMIN|17A1B01|A1H0009|QgTOWnDhMPZqMBlgje2019-02-22T14:38:06+05:30", "ColumnName": "0", "Key_ID": "0" }
        const _this = this
        const result1 = postToServer("SfaApi", data).then(function (result) {
            _this.setState({
                BackEndData: result.data.Header.Other,
                tableheader: result.data.Header.Header
            })
            console.log(result.data.Header.Other, _this.state.BackEndData)
        })
    }
    render() {
        let rows = this.state.BackEndData.reduce((p, n, i) => {
          
            if (n.Visible == "true") {
                switch (n.DisplayType) {
                    case "Text":
                    case "RichTextBox":
                        p.push(

                            <Col key={n.Id} md={5} xl={4} className="mb-3">
                                <Text name={n.LabelDisplay} />
                            </Col>
                        )
                        console.log('yess  came it again')
                        break;
                    case "Dropdown":
                        p.push (
                            <Col key={n.Id} md={5} xl={4} className="mb-3">
                                <Dropdown1 name={n.LabelDisplay} />
                            </Col>
                        )
                        break;
                    case "radio":
                        p.push (
                            <Col key={n.Id} md={5} xl={4} className="mb-3">
                                <Radio name={n.LabelDisplay} />
                            </Col>
                        )
                        break;
                    default:
                        break;
                }
            }
            return p;
        }, [])
        // const data = this.state.BackEndData
        return (
            <div>
                <div   style={ this.state.listsate? {"display":"none"}:{}}>
                <div   className="page-title">
                    <h3><b>{this.state.tableheader}</b></h3>
                </div>
                <Container>
                    <Row>
                        {rows}
                    </Row>
                </Container>
                <div className="button-group" style={{ "text-align": "center" }} >
                    <input style={{ "margin": "0px ", "padding": "14px" }} className="save" type="submit" value="Save" onClick={this.save} />
                    <button style={{ "margin-left": "15px ", "padding": "14px" }} className="cancel" onClick={this.handleClose}>Cancel</button>
                </div>

                   </div>

<div style={ !this.state.listsate? {"display":"none"}:{}}>
 <div className="content-spacing">
                <div className="dcr-head">
                    <div>
                        <h4 className="daily-call-report">DCR Call Report</h4>
                    </div>
                    <div>
                    <Breadcrumb className="dcr-breadcrumb">
                        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>DCR List</Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                </div>
            <CustomTable  
               
                tableHeader={header}
                tableBody={body}
                keyName="userTable"
                tableClass="striped hover table-responsive"
                rowsPerPage={10}
                rowsPerPageOption={[10, 15, 20]}
                initialSort={{prop: "username", isAscending: true}}
                labels={customLabels}
            />
            </div>
</div>
             <div   className="add-new-dcr">
                    <img onClick={ this.Changelist}  src="../public/assets/images/add-icon.svg" alt="add_icon" />
                </div>   




            </div>
        )
    }

}

export default MainMasterFixed;