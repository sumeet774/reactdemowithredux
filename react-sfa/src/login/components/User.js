import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            COMPANY: '',
            Username: '',
            Password: '',


        })
        this.change_COMPANY = this.change_COMPANY.bind(this)
        this.change_mobile = this.change_mobile.bind(this)
        this.change_pass = this.change_pass.bind(this)
        this.Userfuncall = this.Userfuncall.bind(this)
    }

    Userfuncall() {
        //console.log(this.state.Username,this.state.Password,this.state.Username,'kunal')
        this.props.Userfun(this.state.COMPANY, this.state.Username, this.state.Password);
    }

    change_COMPANY(param) {
        this.setState({ COMPANY: param.target.value })
    }

    change_mobile(param) {
        this.setState({ Username: param.target.value })
    }

    change_pass(param) {
        this.setState({ Password: param.target.value })
    }

    render() {

        return (
            <div>
                <Form.Group controlId="formBasicEmail" className="login-form-group">
                    <Form.Label className="login-label">COMPANY <span className="red-clr">*</span></Form.Label>
                    <Form.Control onChange={this.change_COMPANY} value={this.state.COMPANY} className="login-form-control" placeholder="Enter Your COMPANY" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="login-form-group">
                    <Form.Label className="login-label">USER NAME <span className="red-clr">*</span></Form.Label>
                    <Form.Control value={this.state.Username} onChange={this.change_mobile} className="login-form-control" placeholder="Enter Your USER NAME" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="login-form-group">
                    <Form.Label className="login-label">PASSWORD/OTP <span className="red-clr">*</span></Form.Label>
                    <Form.Control value={this.state.Password} onChange={this.change_pass} className="login-form-control" placeholder="Enter Password / OTP" />
                </Form.Group>
                {
                    this.props.msg.length!=0    ?
                        <Form.Group className="login-form-group">
                            <label className="login-label"><span className="red-clr">{ this.props.msg}</span></label>
                        </Form.Group> : <div></div>
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
                    <a href="#" className="generate-otp">Generate OTP</a>
                </div>

                <button onClick={this.Userfuncall}  className="solid-blue-btn">I'AM IN</button>
                <p className="or">OR</p>
                <div>
                    <button onClick={this.props.change} className="ouline-grey-btn">LOGIN WITH MOBILE</button>
                </div>
            </div>
        );
    }

}

export default User;
