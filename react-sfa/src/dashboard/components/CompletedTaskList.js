import React, {Component} from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import WeeklyTaskList from './WeeklyTaskList'
import SelectedTaskList from './SelectedTaskList'

import DatePicker from 'react-datepicker'
import { startOfWeek, subWeeks, addDays, format } from 'date-fns'

import { connect } from 'react-redux'
import { getCompletedTask } from '../../actions/calendar'


const months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];

class CompletedTaskList extends Component{
    constructor(props){
        super(props)
        this.state={
            key: '',
            showTodayDetails:true,
            completedTask: '',
            date:new Date 
        }
        this.dateChanged = this.dateChanged.bind(this);
        this.showActiveKey = this.showActiveKey.bind(this)
        this.getCompletedList = this.getCompletedList.bind(this)   
    }

    dateChanged(d){ 
        this.setState({
            date: d,
            key: '',
            showTodayDetails: true
        });
    }

    showActiveKey(key){
        var weekStartDate = startOfWeek(new Date(2019, 4, 15))
        // var weekStartDate = startOfWeek(new Date())
        var weekEndDate = addDays(weekStartDate, 6)
        var prevWeekEndDate = subWeeks(weekEndDate, 1)

        this.setState({
            key,
            showTodayDetails:false, 
            weekEndDate,
            prevWeekEndDate
        })
    }
    
    componentDidMount(){
        this.getCompletedList()
    }

    getCompletedList(){
        var data = {
            "index": "DCRDetails",
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
        this.props.getCompletedTask(data)
    }

    render(){
        return(
            <div className="weeklyTask">
                <div className="currDateSection">
                    {format(this.state.date, 'Do')}<span className="monthPad">{format(this.state.date, "MMMM")}</span>{format(this.state.date, "YYYY")}
                    <img src="../public/assets/images/play-button.svg" className="playBtn" />
                    <div className="datepickerAligment completed-task-celendar">
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.dateChanged}
                        />
                    </div>    
                </div>
                
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.showActiveKey(key)}
                >
                    <Tab eventKey="thisWeek" title="This Week" >
                        {this.state.key == "thisWeek" ? <div className="weeklyTask-line"><WeeklyTaskList endDate={this.state.weekEndDate} /></div> : null}
                    </Tab>
                    <Tab eventKey="prevWeek" title="Previous Week"  >
                        {this.state.key == "prevWeek" ? <div className="weeklyTask-line"><WeeklyTaskList endDate={this.state.prevWeekEndDate} /></div> : null}
                    </Tab>
                </Tabs> 

                {this.state.showTodayDetails ? 
                <div className="weeklyTask-line">
                    <SelectedTaskList selectedDate={this.state.date} />
                </div>
                : null }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    completedTask: state.Calendar.completedTask
})

const mapDispatchToProps = dispatch => ({
    getCompletedTask: (data) => dispatch(getCompletedTask(data))   
})

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTaskList);