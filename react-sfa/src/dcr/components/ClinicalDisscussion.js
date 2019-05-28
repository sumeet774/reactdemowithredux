import React,{Component} from 'react'
import {Breadcrumb,Row,Col,Form} from 'react-bootstrap'

class ClinicalDiscussion extends Component{
    constructor(props){
        super(props);
        this.state={
            chars_left:500,
            max_char:500,
            maxlengthText:'500',
        }
        this.handleWordCount = this.handleWordCount.bind(this)
    }
    handleWordCount(event){
        const charCount = event.target.value.length;
        const maxChar = this.state.max_char;
        const charLength = maxChar - charCount;
        
        this.setState({
            showRemaing:false,
            maxlengthText:charLength
        })
    }

    render(){
        return(
                <div>
                    <Form.Label className="customized-label">In Clinical Discussion</Form.Label>
                        <span className="maxLength">Max <span className="maxlenColor">{this.state.maxlengthText}</span> Character</span>      
                    <Form.Control as="textarea" rows="5" placeholder="Enter text Here" maxLength="500" onChange={this.handleWordCount}/>
                </div>
                );
    }
}
export default ClinicalDiscussion
