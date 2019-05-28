import React,{Component} from 'react'
import {Row,Col,Form} from 'react-bootstrap'
import ProductDeatilDropdown from './ProductDeatilDropdown'
import SamplePramotionDropdown from './SamplePramotionDropdown'
import POBDropdown from './POBDropdown'
import JointWorkingDropdown from './JointWorkingDropdown'
import ClinicalDisscussion from './ClinicalDisscussion'

class DoctorDetailDCR extends Component{
    constructor(props){
        super(props)
        this.state={
             
             time:new Date().getHours()+":"+new Date().getMinutes(),
             timeType:''
        }
        
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
    tick() {
        let hour =  new Date().getHours();
        let TimeType;
        if(hour <= 11){ 
            TimeType = 'AM';
        }
        else{
            TimeType = 'PM';
        }
        if( hour > 12 ){
            hour = hour - 12;
        }
            
        this.setState({
          time: hour+":"+new Date().getMinutes(),
          timeType:TimeType
        });
    }
    render(){
        return(
                <div className="dcr-list-sec">
                    <div className="docName borderBottom">Dr. Amit Kumar (Jayanagar)</div>
                    <div className="timeSec">
                        <div className="timeIcon"><img src="../public/assets/images/time.svg"/></div>
                        <div className="currtime">{this.state.time}</div>
                        <div className="currtimeslot">{this.state.timeType}</div>
                    </div>
                    <div className="pad22">
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12} className="product singledropdown" >
                                <Form.Label className="customized-label">Product Detailing & Doctor Role</Form.Label>
                                <ProductDeatilDropdown />
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className="product singledropdown">
                                <Form.Label className="customized-label">Samples & pramotions</Form.Label>
                                 <SamplePramotionDropdown />
                            </Col>
                       
                            <Col lg={6} md={6} sm={12} xs={12} className="product singledropdown" >
                                    <Form.Label className="customized-label">POB (item wise)</Form.Label>
                                    <POBDropdown />
                                <div className="joinpad">
                                    <Form.Label className="customized-label">Joint Working</Form.Label>
                                    <JointWorkingDropdown />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className="product">
                                <ClinicalDisscussion />
                            </Col>
                        </Row>
                        <Row className="marginTop21 ">
                            <Col lg={6} md={6} sm={12} xs={12} className="product">
                                <button className="savedcrBtn  mb-2">Save DWR</button>
                                <button className="danger danger-outline mr-2 mb-2 padleft">Cancel</button>
                            </Col>
                                                   
                        </Row>
                    </div>
                </div>
                )
    }
}
export default DoctorDetailDCR


