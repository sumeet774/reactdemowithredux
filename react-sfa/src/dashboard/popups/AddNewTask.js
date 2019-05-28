import React,{Component} from 'react'
import {Form,Modal,Button} from 'react-bootstrap'

import DatePicker from 'react-datepicker';
import { Dropdown } from 'semantic-ui-react'
import { options } from '../../testdata/missedreport'
import { format } from 'date-fns'

import {AddnewTask, AddnewPlannedTask} from "../../actions/calendar"

import {connect} from "react-redux"
class AddNewTask extends Component{
    constructor(props ) {
        super(props );
        this.state = {
            show:false,
            showTaskModal:true,
            desc: ''
        }
        this.hideTaskModal = this.hideTaskModal.bind(this)
        this.dateChanged = this.dateChanged.bind(this);  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   
    hideTaskModal(){
        this.setState({
            showTaskModal:false
        })
    }

    dateChanged(d){ 
        this.setState({date: d});
    }

    handleChange(e){
        this.setState({
            desc: e.target.value
        })   
    }

    handleSubmit(){
        var date = this.state.date ? format(this.state.date, "YYYY-MM-DD") : ""
        var time = this.state.date ? this.state.date.toLocaleTimeString() : ""
        var data={
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "task_type_code":"",
            "task_description": this.state.desc,
            "task_date": date,
            "task_time": time,
            "index":"1"
        }
        if(!date){
            this.props.AddnewTask(data)
        }else{
            this.props.AddnewPlannedTask(data)
        }
        this.props.closeModal()
    }

    render(){
        return(
            <div>
                <Modal size="lg" show={this.props.showNewTaskModal} centered>
                    <Modal.Header className="plan-this-task">
                        <Modal.Title className="modalTitle">ADD A NEW TASK<span className="modalCancelBtn">
                            <img src="../public/assets/images/cancel.png" onClick={this.props.closeModal} /></span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="plan-this-task">
                        <Form>
                            <div className="singledropdown mb-2">
                                <Form.Label className="customized-label">What you want to do<span className="colorRed">*</span></Form.Label>
                                <Dropdown placeholder='Select your work type' className="customized-input" fluid selection options={options} />
                            </div>
                            <Form.Group className="m-0 mb-2">
                                <Form.Label className="customized-label">
                                    Date & Time
                                </Form.Label>
                                <div className="datepickerAligment">
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.dateChanged}
                                        placeholderText="Date"
                                        />
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.dateChanged}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="h:mm aa"
                                        timeCaption="Time"
                                        placeholderText="Time"
                                    />
                                </div>
                            </Form.Group>
                            <div>
                                <Form.Label className="customized-label">
                                    Description
                                </Form.Label>
                                <Form.Control  as="textarea" rows="3" placeholder="Add message here" className="popup-textbox" value={this.state.desc} onChange={this.handleChange} />
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="plan-this-task">
                        <Button variant="secondary" onClick={this.handleClose} className="cancelBtn"  onClick={this.props.closeModal} >
                            Cancel
                        </Button>
                        <Button variant="primary"  className="planBtn" onClick={this.handleSubmit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const MapDispatchToProps = dispatch => ({
    AddnewTask: (data) => dispatch(AddnewTask(data)), 
    AddnewPlannedTask: (data) => dispatch(AddnewPlannedTask(data))
})

export default connect(null, MapDispatchToProps)(AddNewTask)

