import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import User from  './User'
import Mobile from  './Mobile'

import { connect } from 'react-redux'
import { doLogin } from '../../actions/login'

class LoginForm extends Component{ 
    constructor(props){
        super(props);

        this.state=({
            loginWithUserName:false,
            token:false,
            errorMsg:''
        })

        this.toggleLoginMode = this.toggleLoginMode.bind(this);
        this.loginUserWithMobile = this.loginUserWithMobile.bind(this);
        this.loginUserWithUserName = this.loginUserWithUserName.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let state = {}
        if (prevState.token !== nextProps.token)
            state.token = nextProps.token
        if (prevState.errorMsg !== nextProps.errorMsg)
            state.errorMsg = nextProps.errorMsg
        for(const key in state) {
            if (state.hasOwnProperty(key)) {
                return state;
            }
        }
        return null
    }

    /**
     * this function logs in the user with mobile information
     * @param mob
     * @param pass
     */
    loginUserWithMobile(mob,pass){
        const data={
            index: "login",
            Token: "",
            Data: {
                mob: mob,
                pas: pass
            },
            Header: {}
        }
        this.props.doLogin(data)
    }

    /**
     * This function logs in the user with username and password
     * @param com
     * @param user
     * @param pass
     */
    loginUserWithUserName(com,user,pass){
        const data={
            index: "login", 
            Token: "", 
            Data:{"usr":user,"pas":pass ,"com":com }, 
            Header: {}
        }
        this.props.doLogin(data)
    }

    /**
     * This function generates the OTP
     */
    generateOTP(){
        alert('generate otp')
    }

    /**
     * Toggles the login view on the login screen. Show either login with mobile or with username
     */
    toggleLoginMode(){
        this.setState({loginWithUserName:!this.state.loginWithUserName})
    }

    redirectToDashboard() {
        return (
            <Redirect to='/dcr' />
        )
    }

    render(){
        const { token } = this.state
        if (token)
            return this.redirectToDashboard()
        return(
            <div className="login-form">
                <h2 className="login">LOGIN</h2>
                {
                    this.state.loginWithUserName &&
                    <User msg={this.state.errorMsg}
                      Userfun= {this.loginUserWithUserName}
                      change= {this.toggleLoginMode}
                    />
                }
                {
                    !this.state.loginWithUserName &&
                    <Mobile
                        genrateotp= {this.generateOTP}
                        msg= {this.state.errorMsg}
                        Mobilefun={this.loginUserWithMobile}
                        change={this.toggleLoginMode}
                    />
                }
                <div className="flex-row">
                    <a href="#" className="static-links">Terms & Conditions</a>
                    <a href="#" className="static-links">Need Help?</a>
                </div>
                <div className="text-center">
                    <p className="powered-by">Powered by <a href="#" className="link">C-Square</a></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.login.token,
    errorMsg:state.login.error
})

const mapDispatchToProps = dispatch => ({
	doLogin:(data) => dispatch(doLogin(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)