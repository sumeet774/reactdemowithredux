import React,{Component} from 'react'
import { Form} from 'react-bootstrap'


class ProductSubCheckbox extends Component{
    constructor(props){
        super(props)
       
    }
    
    render(){
        return(
                <Form.Check 
                    custom
                    inline
                    checked = {this.props.checked}
                    type="checkbox"
                    id={this.props.proName+this.props.id}
                    label={this.props.proName}
                    className="mb-2"
                    name={this.props.proName}
                    onChange={this.props.update}
                />
        )
    }
}
export default ProductSubCheckbox