
import React, {Component} from 'react'
 
import {Breadcrumb,Row,Col,Form} from 'react-bootstrap'
class Radio extends Component{
    constructor(props) {
        super(props);
        this.state = {
           isload:false,
           isOn:'Active',
           isOff:'Active',
        };
// alert (this.props.name)
 var param =this.props.name.split(',')
this.state.isOn=param[0]
this.state.isOff=param[1]       
}


    render(){
        return(
             
<div>
            <Form.Label className="customized-label chemistlabel">{this.props.displayname}</Form.Label>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="paddTop8">
                    <label class="switch">
                        <input type="checkbox" id="togBtn" />
                            <div class="slider round">
                                <span class="on">{this.state.isOn}</span>
                                <span class="off">{this.state.isOff}</span>
                            </div>
                    </label>
                </Col>

            </Row>

            </div>




        //     <Form.Label className="customized-label">{this.props.caption}  
        //     <Form.Check
        //     custom
        //     inline
        //     type="radio"
        //     id={this.props.name}
        //     label={this.props.name}
        // />
        // </Form.Label>
        )
    }

}

export default Radio;