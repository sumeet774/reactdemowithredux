import React, { Component } from 'react'
import {Form,Modal,Button} from 'react-bootstrap'

class InputBox extends Component {
    
    constructor(props){
        super(props)
        this.state={
          disp:false,
          limit:'Enter Amount Not More than',
      }
      this.handlechange = this.handlechange.bind(this);
    }
    handlechange(event){
      if(event.target.value==""){
        this.setState({
        disp:false
        })
      }
      else{
          this.setState({
            disp:true
          })
      }
  }

  render() {
    return (
      <div>
        <div className="expencebox">
              <Form.Label className="customized-label chemistlabel">{this.props.act.expnm}</Form.Label>
              <Form.Label className="maxLength float-right">{this.props.act.lmt}</Form.Label>
              <Form.Control 
                  type="number" 
                  id="1"
                  className="customized-input amount" 
                  name={this.props.act.expnm}
                  placeholder={this.state.limit+' '+this.props.act.lmt} 
                  onChange={this.handlechange}
              />
              {this.state.disp && 
              <div>
                  {/* <InputBox /> */}
                  <Form.Control 
                      type="text" 
                      className="customized-input" 
                      name={this.props.act.expnm}
                      placeholder="Enter Detail Of Expence" 
                      />
              </div>
              }
          </div>            
      </div>
    )
  }
}


export default InputBox