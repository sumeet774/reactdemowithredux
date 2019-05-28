import React,{Component} from 'react'
import {Form,Modal,Button} from 'react-bootstrap'
import {format} from 'date-fns'
import DatePicker from 'react-datepicker';

import {moveToPlannedTask} from '../../actions/calendar'
import {connect} from "react-redux"

class PlanTask extends Component{
    constructor(props){
        super(props)
        this.state={
             
        }
        this.dateChanged = this.dateChanged.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        var taskId = this.props.taskId
        var desc = this.props.desc
        var date = format(this.state.date, "YYYY-MM-DD")
        var time = this.state.date.toLocaleTimeString()

        var data = {
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "task_type_code":"",
            "task_description": desc,
            "task_date": date,
            "task_time": time,
            "task_id": taskId,
            "index":"2"
        }

        this.props.moveToPlannedTask(data)
        this.props.closeModal()
    }

    dateChanged(d){ 
        this.setState({date: d});
    }
    
    render(){
        return(
            <div>
                <Modal size="lg" show={this.props.showPlanModal} onHide={this.handleClose}  centered>
                    <Modal.Header className="plan-this-task">
                        <Modal.Title className="modalTitle">PLAN THE TASK<span className="modalCancelBtn">
                            <img src="../public/assets/images/cancel.png" onClick={this.props.closeModal} /></span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="plan-this-task">
                        <Form>
                            <Form.Group className="m-0">
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
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="plan-this-task">
                        <Button variant="secondary" onClick={this.props.closeModal} className="cancelBtn">
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit} className="planBtn">
                            Move To Planned List
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const MapDispatchToProps = dispatch => ({
    moveToPlannedTask: (data) => dispatch(moveToPlannedTask(data))
})

export default connect(null, MapDispatchToProps)(PlanTask)
