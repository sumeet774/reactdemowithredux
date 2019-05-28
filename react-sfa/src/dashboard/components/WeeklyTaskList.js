import React, {Component} from 'react'

import { connect } from 'react-redux'
import { subDays, format, isToday } from 'date-fns'
import {Link} from 'react-router-dom'

class WeeklyTaskList extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let date = this.props.endDate;
        let completedTask = this.props.completedTask

        let task = [];
        
        for (var i = 0; i < 7; i++) {
            
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
            
            let dateList = {
                date: date,
            }

            task.push(
                <TaskList key={i} dateList={dateList} VisitDetails={VisitDetails}/>
            );
            date = subDays(date, 1)
        }

        if(!completedTask)
            return null
        return (
            <div className="slide-up">
                { task }
            </div>
        )
    } 
}



class TaskList extends Component{
    render(){                    
        const {
            dateList,
            VisitDetails
        } = this.props  
        if(Object.keys(VisitDetails).length === 0)
            return null
        return(
            <div>
                <div id="thisWeek" className="thisWeekDet" >
                    <div className="">
                        <div className="mt-3 currDateSection">{format(dateList.date, "Do")}<span className="monthPad">{format(dateList.date, "MMMM")}</span> {format(dateList.date, "YYYY")}</div>
                        {
                            Object.keys(VisitDetails).map((item,i) => ( 
                                <div className="weekInfoDiv" key={i}>
                                    <div className="weekInfoTime">{VisitDetails[item]["time"]}</div>
                                    <div className="week-info-details">
                                        <p>Meeting with <Link href="" className="doctorname">{VisitDetails[item]["DSCName"]}</Link> in <Link href="" className="doctorname">{VisitDetails[item]["subArea"]}</Link></p>
                                        { VisitDetails[item]["isToday"] ? <div className="editCallBtn">Edit Call</div> : null}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    completedTask: state.Calendar.completedTask
})


export default connect(mapStateToProps)(WeeklyTaskList)

