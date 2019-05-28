import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { Dropdown,DropdownButton} from 'react-bootstrap'

class AddButtonDropdown extends Component{
    render(){
        return(
            <div className="plus-btn">
                <DropdownButton 
                    variant="secondary"
                    title={ <img src="../public/assets/images/add-icon.svg"  className="addPlanBtn"/>}
                    id='dropdown-button-drop-up'
                >
                    <Dropdown.Item eventKey="1"  className="dropupItem">
                        MTP Entry
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="/dcr-common" className="dropupItem" >
                        DCR Entry
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" className="dropupItem">
                        Leave
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4" className="dropupItem" onClick={this.props.showModal} >
                        Add New Task
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}
export default AddButtonDropdown