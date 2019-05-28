import React,{Component} from 'react'
import { Form} from 'react-bootstrap'


class QuantityInput extends Component{
    constructor(props){
        super(props)
        this.state={
            value:this.props.value
        }
        this.valChange = this.valChange.bind(this)
    }
    valChange(event){ 
        let Qty = false
        const id = event.target.id
        Qty = event.target.value;
        this.setState({
            value:Qty
        },this.props.update(this.props.ind,Qty,id))
    }
    render(){ 
        return(
                
            <span className="qtyinput">
           
                <Form.Control 
                    type="text" 
                    id={this.props.id}
                    className="qtyValue" 
                    value={this.props.Total == 0.00 ? 0 : this.state.value} 
                    name={this.props.rate}
                    onChange={this.valChange}
                            
                /> 
            </span>
                
        )
    }
}
export default QuantityInput
