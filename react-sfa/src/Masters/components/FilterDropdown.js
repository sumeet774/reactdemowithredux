import React, { Component } from "react"

import { Form } from 'react-bootstrap'

import { Dropdown } from "semantic-ui-react"

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]


class FilterDropdown extends Component{
    render(){
        return(
            <div>
                <Form>
                    <h5 className="drop-head">Graphical Filter</h5>
                    <div className="singledropdown mt-14">
                        <Form.Label className="customized-label">Zone</Form.Label>
                        <Dropdown placeholder='Select' className="customized-input" fluid selection options={options} />
                    </div>

                    <div className="singledropdown mt-14">
                        <Form.Label className="customized-label">Region</Form.Label>
                        <Dropdown placeholder='Select' className="customized-input" fluid selection options={options} />
                    </div>

                    <div className="singledropdown">
                        <Form.Label className="customized-label">Area</Form.Label>
                        <Dropdown placeholder='Select' className="customized-input" fluid selection options={options} />
                    </div>
                   
                    <div>
                        <button className="gradient-btn">Apply</button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default FilterDropdown