import React,{Component} from 'react'
import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import VisitDetails from './VisitDetails'

import {connect} from 'react-redux'

class PlannedTaskList extends Component{
    constructor(props){
        super(props)
        this.state={
            key2: 'Last 3 Visit Details',
            visitShowDetails:false
        }
        this.handleVisit = this.handleVisit.bind(this)
        this.closeVisitbar = this.closeVisitbar.bind(this)
    }
    
    handleVisit(){ 
        this.setState({
            visitShowDetails:true
        })
    }

    closeVisitbar() {
       this.setState({
            visitShowDetails:false
        })
    }
    

    render(){
        const {
            taskList, 
            completedTask
        } = this.props
        
        if(!taskList)
            return null
        return(
            <div>
                <div className="plan-list">
                    <div className="planning-sec">
                        <div className="fst-sec">
                            <p>{taskList.time}</p>
                        </div>
                        <div className="second-sec">
                            <p>Meeting with <Link to="" className="doctorname">{taskList["DSC Name"]}</Link> in <Link to="" className="doctorname">{taskList["SubareaName"]}</Link></p>
                        </div>
                    </div>
                    <div className="btn-panel">
                        <button className="direction-btn"><img src="../public/assets/images/direction.svg" /></button>
                        <button className="plan-btn" onClick={this.handleVisit}>Visit Details</button>
                        <button className="plan-btn"><Link to={"/visit-preparation/" + taskList["DSC Code"]}>Visit Prep.</Link></button>
                        {/* <Form.Check 
                            custom
                            type="checkbox"
                            id={"checkbox" + taskList.id}
                            label=""
                            className="visitCheckbox"
                        /> */}
                    </div>
                </div>
                
                <div className={this.state.visitShowDetails==true ? "visit-sidebar opened" : "visit-sidebar"} ><VisitDetails DSCName={taskList["DSC Name"]} visitDetail={completedTask} closeBar={this.closeVisitbar} /></div> 
               
            </div>
        )
    }
}

const MapStateToProps = state => ({
    completedTask: state.Calendar.completedTask
})

export default connect(MapStateToProps)(PlannedTaskList)
