import React,{Component} from 'react'
import {Breadcrumb,Row,Col,Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import ProductDeatilDropdown from '../components/ProductDeatilDropdown'
import SamplePramotionDropdown from '../components/SamplePramotionDropdown'
import POBDropdown from '../components/POBDropdown'
import ClinicalDisscussion from '../components/ClinicalDisscussion'
import OtherActivity from '../popups/OtherActivity'
import JointWorkingDropdown from '../components/JointWorkingDropdown'
import { getProductDropdown } from '../../actions/DCR'

class CreateNewDCR extends Component{
    constructor(props){
        super(props)
        this.state={
             showModal:false,
             time:new Date().getHours()+":"+new Date().getMinutes(),
             timeType:'',
             data:[]
        }
        this.handleShowModal = this.handleShowModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.tick = this.tick.bind(this)
        this.getDropdown = this.getDropdown.bind(this)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data) 
            //console.log("data=",nextProps.data)
            return {...prevState, data:nextProps.data}
        
        return null
    }
    componentDidMount() {
        this.getDropdown();
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
    }
    componentWillUnmount() {
       
        clearInterval(this.intervalID);
        
    }
    getDropdown(){ 
        var data = {"n_type":"1",
                    "Token": "sfa360|MR1(Salem)|MR1|TNH0012|AIAaDdKtMMZSQSxbEwU2019-05-02T11:33:51+05:30"
                    }
                   
            this.props.getProductDropdown(data)
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
     handleShowModal() { 
        this.setState({ 
            showModal: true 
        });
    }
    handleClose(){    
        this.setState({
            showModal:false
        })
    }
    render(){
        const {data} = this.state
        if(!data) 
                   
            return null
                   
            return(
                    <div className="content-spacing marginTop10">
                    <div className="dcr-head">
                        <div>
                            <h4 className="daily-call-report">Quick DWR Entry</h4>
                        </div>
                        <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            <div className="activityBtn" onClick={this.handleShowModal}>
                                <img src="../public/assets/images/add-icon.svg" className="exportImgPad" />Other Activity
                            </div>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">DWR List</Breadcrumb.Item>
                            <Breadcrumb.Item active>DWR Entry</Breadcrumb.Item>
                        </Breadcrumb>
                        </div>

                    </div>
                    <OtherActivity showPlanModal={this.state.showModal} closeModal={this.handleClose}  />
                    
                    <div className="dcr-list-sec">
                        <div className="docName borderBottom">Dr. Amit Kumar (Jayanagar)</div>
                        <div className="timeSec">
                            <div className="timeIcon"><img src="../public/assets/images/time.svg"/></div>
                            <div className="currtime">{this.state.time}</div>
                            <div className="currtimeslot">{this.state.timeType}</div>
                        </div>
                        <div className="DcrDropdown pad22">
                            <Row>
                            {data.map((item,index) => {
                                if(item.c_name == "Product Detailing & Doctor Role"){
                                    if(item.n_visible == 1){
                                        if(item.n_priority == 1){
                                            return <Col key={item.n_priority} lg={6} md={12} sm={12} xs={12} className="product singledropdown" >
                                                <Form.Label className="customized-label">Product Detailing & Doctor Role</Form.Label>
                                                <ProductDeatilDropdown />
                                                </Col>
                                        }
                                    }
                                }
                                if(item.c_name == "Samples & pramotions"){
                                    if(item.n_visible == 1){
                                        if(item.n_priority == 2){
                                            return  <Col key={item.n_priority} lg={6} md={12} sm={12} xs={12} className="product singledropdown">
                                                <Form.Label className="customized-label">Samples & pramotions</Form.Label>
                                                <SamplePramotionDropdown />
                                                </Col>
                                        }
                                    }
                                }
                                
                                if(item.c_name == "POB (item wise)"){
                                    if(item.n_visible == 1){
                                        if(item.n_priority == 3){
                                            return <Col key={item.n_priority} lg={6} md={12} sm={12} xs={12} className="product singledropdown" >
                                                <Form.Label className="customized-label">POB (item wise)</Form.Label>
                                                <POBDropdown />
                                                </Col>
                                        }
                                    }
                                }
                                if(item.c_name == "In Clinical Discussion"){
                                    if(item.n_visible == 1){
                                        if(item.n_priority == 4){
                                            return <Col key={item.n_priority} lg={6} md={12} sm={12} xs={12} className="product">
                                                    <ClinicalDisscussion />
                                                    </Col>
                                        }
                                    }
                                }
                                if(item.c_name == "Joint Working"){
                                    if(item.n_visible == 1){
                                        if(item.n_priority == 5){
                                            return <Col key={item.n_priority} lg={6} md={12} sm={12} xs={12} className="product singledropdown">
                                                <Form.Label className="customized-label">Joint Working</Form.Label>
                                                <JointWorkingDropdown />
                                                </Col>
                                        }
                                    }
                                }
                                
                            })
                            }
                            </Row>
                            <Row className="marginTop21 ">
                                <Col lg={6} md={12} sm={12} xs={12} className="product">
                                    <button className="savedcrBtn  mb-2">Save DWR</button>
                                    <button className="danger danger-outline mr-2 mb-2 padleft">Cancel</button>
                                </Col>

                            </Row>
                        </div>
                    </div>
                    
                </div>
            );
    }
}

const mapStateToProps = (state) => ({
    data:state.DCR.dataDropdown
})

const mapDispatchToProps = dispatch =>({
    getProductDropdown:(data) => dispatch(getProductDropdown(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateNewDCR)
