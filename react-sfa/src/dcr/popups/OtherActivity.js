import React,{Component} from 'react'
import { connect } from 'react-redux'

import InputBox from './InputBox'

import { getOtherActivities } from '../../actions/OtherActivity'
import {Form,Modal,Button} from 'react-bootstrap'
import { Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import { options } from '../../testdata/missedreport'


class OtherActivity extends Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date,
            data: [],
        }
        this.dateChanged = this.dateChanged.bind(this);
        this.getActivity = this.getActivity.bind(this);
        
    }
    dateChanged(d){ 
        this.setState({date: d});
    }
    componentDidMount(){
        this.getActivity()
    }
    getActivity(){
        var data ={
            "Header": [
                    {
                        "fsc": "mr1",
                        "fscode": "mr1",
                        "area": "TNH0012",
                        "search": "",
                        "cd": "smstest"
                    }
                ],
            "idx": "downloadExpense",
            "Token": "sfakey"
         }
            this.props.getOtherActivities(data)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data) 
            //console.log("completed", nextProps.data)
            return {...prevState, data:nextProps.data}
        return null
      }
      
    render(){
        const {data} = this.state
            if (!data)
                return null
        return(
            <div>
                <Modal size="lg" show={this.props.showPlanModal} onHide={this.handleClose}  centered>               
                <Form>
                    <Modal.Header className="plan-this-task">
                        <Modal.Title className="modalTitle">OTHER ACTIVITIES<span className="modalCancelBtn">
                            <img src="../public/assets/images/cancel.png" onClick={this.props.closeModal} /></span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="plan-this-task">
                       
                            <div className="singledropdown mb-2">
                                <Form.Label className="customized-label">Area Feedback</Form.Label>
                                <Form.Control type="text" className="customized-input" placeholder="Enter your work type" />
                                {/* <Dropdown placeholder='Select your work type' className="customized-input" fluid selection options={options} /> */}
                            </div>
                            <div className="missHead"><h6>MISCELLANEOUS AMOUNT</h6></div>
                            <div>
                                {data.map((activty,index) => (
                                    <InputBox key={index} act={activty}/>
                                ))}
                            </div>
                        
                    </Modal.Body>
                    <Modal.Footer className="plan-this-task">
                        <Button variant="secondary" onClick={this.props.closeModal} className="cancelBtn">
                            Cancel
                        </Button>
                        <Button variant="primary"  className="planBtn">
                            Submit
                        </Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state =>({ 
    data:state.OTHERACT.data
  })
  
  const mapDispatchToProps = dispatch => ({
    getOtherActivities:(data) => dispatch(getOtherActivities(data))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(OtherActivity); 
