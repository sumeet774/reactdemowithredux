import React, {Component} from 'react'

import {Form} from 'react-bootstrap'

class PrePlannedTask extends Component{
    render(){
        const {
            prePlannedTask
        } = this.props

        if(!prePlannedTask)
            return null
        return(
            <div>
                {prePlannedTask.map((item, i) => (
                    <div className="plan-list" key={i}>
                        <div className="planning-sec">
                            <div className="fst-sec">
                                <p>{item.t_task_time}</p>
                            </div>
                            <div className="second-sec">
                                <p>{item.c_task_description}</p>
                            </div>
                        </div>
                        <div className="btn-panel">
                            <button className="direction-btn"><img src="../public/assets/images/direction.svg" /></button>
                            <Form.Check 
                                custom
                                type="checkbox"
                                id={"checkbox" + item.n_task_id}
                                label=""
                                className="visitCheckbox"
                            />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default PrePlannedTask