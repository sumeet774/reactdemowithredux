import React,{Component} from 'react'
import { Form} from 'react-bootstrap'

class JointSubCheckbox extends Component{
    constructor(props){
        super(props)
       this.state={
          
           
       }
       
    }
    render(){ 
        return(
                <Form.Check 
                    custom
                    type="checkbox"
                    checked={this.props.selectedName == this.props.itemname ? false :this.props.checked}
                    id={this.props.id}
                    label={this.props.itemname.toLowerCase()}
                    className="mb-2 jointCheck"
                    name={this.props.itemname}
                    onChange={this.props.update}
                />
                )
    }
}
export default JointSubCheckbox

