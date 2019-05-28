import React, { Component } from 'react'

import { Form } from  'react-bootstrap'

class DesignationDropdown extends Component{
    render(){
        return(
            <div>
                <Form>
                    <h5 className="drop-head">Select Designation</h5>
                    <Form.Check 
                        custom
                        type="checkbox"
                        id="checkbox1"
                        label="Medical Representative"
                        checked="true"
                        className="designation-label"
                    />
                    <Form.Check 
                        custom
                        type="checkbox"
                        id="checkbox2"
                        label="Area Manager"
                        checked="true"
                        className="designation-label"
                    />
                    <Form.Check 
                        custom
                        type="checkbox"
                        id="checkbox3"
                        label="Regional Manager"
                        checked="true"
                        className="designation-label"
                    />
                    <Form.Check 
                        custom
                        type="checkbox"
                        id="checkbox4"
                        label="Zonal Manager"
                        checked="true"
                        className="designation-label"
                    />
                    <Form.Check 
                        custom
                        type="checkbox"
                        id="checkbox5"
                        label="National Sales Head"
                        checked="true"
                        className="designation-label"
                    />
                    <Form.Check 
                        custom
                        type="checkbox"
                        id="checkbox6"
                        label="Director"
                        checked="true"
                        className="designation-label"
                    />
                </Form>
            </div>
        )
    }
} 

export default DesignationDropdown