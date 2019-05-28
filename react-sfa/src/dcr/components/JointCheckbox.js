import React,{Component} from 'react'
import { Form} from 'react-bootstrap'


class JointCheckbox extends Component{
    constructor(props){
        super(props)
       this.state={
           checked:false,
           
       }
       this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(){ 
       const {name,id,checked} = event.target
       let itemSelected = false
       if(checked)
            itemSelected = name
            this.setState({
                itemname:name
            },this.props.getData(itemSelected,id))
    }
    
    render(){
        return(
                <Form.Check 
                    custom
                    type="checkbox"
                    id={this.props.id}
                    label={this.props.itemname.toLowerCase()}
                    className="mb-2 jointCheck"
                    name={this.props.itemname}
                    onChange={this.handleChange}
                />
        )
    }
}
export default JointCheckbox