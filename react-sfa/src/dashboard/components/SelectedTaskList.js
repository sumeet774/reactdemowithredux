import React, {Component} from  'react'

import { connect } from 'react-redux'
import { isToday } from 'date-fns'
import {Link} from 'react-router-dom'
class SelectedTaskList extends Component{

    render(){
        let date = this.props.selectedDate;
        let completedTask = this.props.completedTask
            
        let taskList = []
        let VisitDetails = {}

        if(completedTask){
            completedTask.map(list => {
                if(date.toLocaleDateString() == new Date(list.ReportedDate).toLocaleDateString()){
                    taskList.push(list)
                }
            })
        
            taskList.map(item => {
                VisitDetails[item.DSCCode]={"time": new Date(item.ReportedDate).toLocaleTimeString(), "isToday": isToday(new Date(item.ReportedDate)), "DSCName":item.DSCName, "subArea":item.subareaName }
            })
        }
        
        if(!completedTask)
            return null
        return(
            <TaskList VisitDetails={VisitDetails} />
        )
    }
}

class TaskList extends Component{
    render(){
        const {
            VisitDetails
        } = this.props  
        if(Object.keys(VisitDetails).length === 0)
            return null
        return(
            <div className="slide-up">{
                Object.keys(VisitDetails).map((item,i) => ( 
                <div className="todayDetails" key={i}>
                    <div className="weekInfoDiv">
                        <div className="weekInfoTime">{VisitDetails[item]["time"]}</div>
                        <div className="week-info-details">
                            <p>Meeting with <Link to="" className="doctorname">{VisitDetails[item]["DSCName"]}</Link> in <Link to="" className="doctorname">{VisitDetails[item]["subArea"]}</Link></p>
                            { VisitDetails[item]["isToday"] ? <div className="editCallBtn">Edit Call</div> : null}
                        </div>
                    </div>
                </div> ))
            }</div>
        )
    }
}

const mapStateToProps = state => ({
    completedTask: state.Calendar.completedTask
})

export default connect(mapStateToProps)(SelectedTaskList)