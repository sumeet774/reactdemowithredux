import React , { Component } from 'react' 

import {Breadcrumb, Row, Col} from 'react-bootstrap'

import DoctorInfo from '../components/DocterInfo'
import BusinessInfo from '../components/BusinessInfo'
import ProductInfo from  '../components/ProductInfo'
import Samples from   '../components/Samples'

import { connect } from 'react-redux';

import { getDoctorDetail } from '../../actions/DoctorProfile'

class VisitPreparation extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: ''
        }

        this.getDoctor = this.getDoctor.bind(this) 
    }

    componentDidMount(){
        const DocterCode = this.props.match.params.id
        this.getDoctor(DocterCode)        
    }

    getDoctor(DocterCode) {
        var data ={
            "index": "Profile",
            "Result":"0",
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "TableName": "",
            "ColumnName": "",
            "Data": [
                {
                    "doc":"C000253",
                    "year": "2018",
                    "month": "7",
                    "Result":"1"
                }
            ]
        }
        this.props.getDoctorDetail(data)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data){
            // console.log("completed", nextProps.data)
            return {...prevState, data:nextProps.data}
        }
        return null
    }

    render(){
        const {
            data
        } = this.state

        if(!data) 
            return null
        return(
            <div  className="content-spacing">
                <div className="dcr-head">
                    <div>
                        <h4 className="daily-call-report">Start Visit</h4>
                    </div>
                    <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Start Visit</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <DoctorInfo DocterDetails={data} />
                        <BusinessInfo DocterDetails={data} />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <ProductInfo />
                        <Samples />
                    </Col>
                </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(VisitPreparation)