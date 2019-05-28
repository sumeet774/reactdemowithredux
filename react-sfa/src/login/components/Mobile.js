
import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

class Mobile extends Component{
    constructor(props) {
        super(props);
        this.state = ({     
            Username: '',
            Password: '',
        })

        this.change_mobile = this.change_mobile.bind(this)
        this.change_pass = this.change_pass.bind(this)
        this.Mobilefun =this.Mobilefun.bind(this)
    }

    Mobilefun(mob, pass){
        this.props.Mobilefun(this.state.Username,this.state.Password)
    }
    change_mobile(param) {
        this.setState({ Username: param.target.value })
    }

    change_pass(param) {
        this.setState({ Password: param.target.value })
    }

    render(){
        return(            
            <div>
                <Form.Group controlId="formBasicEmail" className="login-form-group">
                    <Form.Label className="login-label">MOBILE NO. <span className="red-clr">*</span></Form.Label>
                    <Form.Control  onChange={this.change_mobile} value={this.state.Username}  onKeyPress={event => {
                        if (event.key === 'Enter'  ) {
                        
                        alert('kunal')
                        }
                    }} className="login-form-control" placeholder="Enter Your Number" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="login-form-group">
                    <Form.Label className="login-label">PASSWORD/OTP <span className="red-clr">*</span></Form.Label>
                    <Form.Control onChange={this.change_pass}  value={this.state.Password} className="login-form-control" placeholder="Enter Password / OTP" />
                </Form.Group>
                {
                    this.props.msg.length!=0  ?
                        <label className="login-label"><span className="red-clr">{ this.props.msg}</span></label>
                       : <div></div>
                }
                <div className="flex-row">
                    <div className="remember">
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox1"
                            label="Remember"
                            className=""
                        />
                    </div>  
                    <a href="#" onClick={this.props.genrateotp} className="generate-otp">Generate OTP</a>
                </div>
  
                <button  onClick={this.Mobilefun} className="solid-blue-btn">I'AM IN</button>
                <p className="or">OR</p>
                <div>
                    <button  onClick={this.props.change} className="ouline-grey-btn">LOGIN WITH USERNAME</button>
                </div>
            </div>
        );
    }

}

export default  Mobile;
