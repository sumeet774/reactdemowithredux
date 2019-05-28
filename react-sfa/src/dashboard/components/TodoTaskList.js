import React, {Component} from 'react'
import {Tabs, Tab} from 'react-bootstrap'

import UnPlannedTaskList from './UnPlannedTaskList'
import PrePlannedTask from './PrePlannedTask'
import PlannedTaskList from './PlannedTaskList'
import AddNewTask from '../popups/AddNewTask'
import AddButtonDropdown from './AddButtonDropdown'

import {format} from 'date-fns'
import { connect } from 'react-redux'
import { getPlannedTask, getPrePlannedTask, getUnPlannedTask } from '../../actions/calendar'

import 'react-datepicker/dist/react-datepicker.css';
import '../../../public/assets/css/bootstrap.min.css'
import '../../../public/assets/css/style.css'
import '../../../public/assets/css/responsive.css'

class TodoTaskList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            key: 'Unplanned',
            isChecked:true,
            showTaskModal:false,
            plannedTask: '',
            unPlannedTask: '',
            prePlannedTask: '',
            PlannedCount: ''
        }
        this.handleNewTask = this.handleNewTask.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.getUnPlanTask = this.getUnPlanTask.bind(this)
        this.getPlanTask = this.getPlanTask.bind(this)
        this.getPrePlanTask = this.getPrePlanTask.bind(this)
        this.planList = this.planList.bind(this)
    }

    componentDidMount(){
        this.getUnPlanTask()
        this.getPlanTask()
        this.getPrePlanTask()
    }

    getUnPlanTask(){
        var data = {
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "task_type_code":"",
            "task_description":"",
            "task_date":"",
            "task_time":"",
            "index":"3"
        }
        this.props.getUnPlannedTask(data)
    }

    getPlanTask(){
        var data = {
            "index": "Mtpinfo",
            "Result":"0",
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "TableName": "",
            "ColumnName": "",
            "Data": [
              {
                "year": "2018",
                "month": "7",
                "Result":"1"
              }
            ]
        }
        this.props.getPlannedTask(data)
    }

    getPrePlanTask(){
        var data = {
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "task_type_code":"",
            "task_description":"",
            "task_date":"2019-05-25",
            "task_time":"",
            "index":"3"
        }
        this.props.getPrePlannedTask(data)
    }

    handleNewTask(){
        this.setState({
            showTaskModal:true
        })
    }

    handleClose() {
        this.setState({ showTaskModal: false });
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.unPlannedTask != prevState.unPlannedTask){
            return {...prevState, unPlannedTask: nextProps.unPlannedTask}
        }
        if(nextProps.prePlannedTask != prevState.prePlannedTask){
            return {...prevState, prePlannedTask: nextProps.prePlannedTask}
        }
        if(nextProps.plannedTask != prevState.plannedTask){
            return {...prevState, plannedTask: nextProps.plannedTask}
        }
        return prevState
    }

    planList(){
        const task = []

        if(this.state.plannedTask){
            this.state.plannedTask.map((list, index) =>{
                if(new Date(list.PlannedDate).toLocaleDateString() == new Date().toLocaleDateString()){
                    const newList =  {
                        id: index,
                        time: new Date(list.PlannedDate).toLocaleTimeString(),
                        ...list
                    }
                    task.push(                  
                        <PlannedTaskList taskList={newList} key={index} />
                    );
                }
            })
        }
        return (
            <Tab eventKey="Planned" title={<span>Planned <span className="badgeTab">{task.length}</span></span>}> 
                <PrePlannedTask prePlannedTask={this.state.prePlannedTask}/>
                {task}
            </Tab>
        )
    }

    render(){ 
        return(
            <div>
                <AddButtonDropdown showModal={this.handleNewTask} />
                <AddNewTask showNewTaskModal={this.state.showTaskModal} closeModal={this.handleClose} />
                <div className="upcomingTask cal-scrollbar">
                    <Tabs
                        id="controlled-tab-example"
                        className="todo-tasklist"
                        activeKey={this.state.key}
                        onSelect={key => this.setState({ key })}
                    >   
                        <Tab eventKey="Unplanned" 
                            title={<span>Unplanned <span className="badgeTab">{this.state.unPlannedTask ? this.state.unPlannedTask.length : 0             }</span></span>
                        }>
                            {this.state.unPlannedTask ? <UnPlannedTaskList unPlannedTask={this.state.unPlannedTask} /> : null }
                        </Tab>
                        {this.planList()}
                    </Tabs>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    plannedTask: state.Calendar.plannedTask,
    unPlannedTask: state.Calendar.unPlannedTask,
    prePlannedTask: state.Calendar.prePlannedTask
})

const mapDispatchToProps = dispatch => ({
    getUnPlannedTask: (data) => dispatch(getUnPlannedTask(data)),
    getPrePlannedTask: (data) => dispatch(getPrePlannedTask(data)),
    getPlannedTask: (data) => dispatch(getPlannedTask(data))   
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoTaskList);