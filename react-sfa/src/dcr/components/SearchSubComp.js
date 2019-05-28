import React,{Component} from 'react'
import { Form} from 'react-bootstrap'

class SearchSubComp extends Component{
    constructor(props) {
        super(props);
        this.state={
            checked : false,
            counter: 0,
            disableChk:true
        }
      
    }
   
    render(){
        return(
                <div className="flex-row padding10">
                    <Form.Check 
                        custom
                        type="checkbox"
                        id={this.props.index}
                        label={this.props.proName}
                        className="mb-2"
                        name={this.props.proName}
                        onChange={this.props.update} 
                    />

                     
                </div>
                )
    }
}
export default SearchSubComp
