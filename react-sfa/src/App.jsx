import React from 'react'
import { FormattedMessage } from 'react-intl'
import {  Router, Route, Redirect, Switch } from 'react-router-dom'

import { connect } from 'react-redux';

// layout
import Header from './landing-page/components/Header'
import Sidebar from './landing-page/components/Sidebar'

//control
import Controls from './design-controls/containers/Controls'

//pages
import Login from './login/containers/index'
import DCRList from './dcr-list/containers/DCRLIst'
import Dashboard from './dashboard/containers/Dashboard'
import Profile from './doctor_profile/containers/Profile'

import MainMasterkey from './Masters/container/index';
import ChemistMaster from './chemist-master/containers/ChemistMaster'
import DoctorMissedReport from './HQ-missed-report/containers/DoctorMissedReport'
import DcrSummaryReport from './DCR-summary-report/containers/DcrSummaryReport'
import Help from './help/components/Help'
import Report from './Report/containers/Report'
import CreateNewDCR from './dcr/containers/CreateNewDCR'
import VisitPreparation from './visit-prep/containers/VistPrep'

import { getCommToken } from './lib/comm-utils'
import { addToken } from './actions/login'
import CommonDCR from './dcr/containers/CommonDCR'
import UserProfile from './userProfile/container/userProfile'

//AuthenticatedRoute checks whether authentication has been completed

const _AuthenticatedRoute = ({ page: Page, ...rest }) => {
    const  isAuthenticated  = true
    return(
        <Route {...rest} render= {props =>
        (isAuthenticated === true) ?
            (<React.Fragment>
                <Sidebar />
                <div className="main">
                    <Header />
                    <React.Fragment>
                        <Page {...props}/>
                    </React.Fragment>
                </div>
            </React.Fragment>)
        :   (<Redirect to={{pathname: '/'}} />)
    }/>)
}

const AuthenticatedRoute = connect(state => ({
        isAuthenticated: !!state.login.token
}))(_AuthenticatedRoute)

const _App = ({ token, dispatch }) => {
    if (!token) {
        token = getCommToken()
        if (token)
            dispatch(addToken(token))
    }
    return (
        <React.Fragment>
            <Switch>
                <AuthenticatedRoute path={"/controls"} exact page={Controls} />
                {/* pages */}
                <Route path={"/"} exact component={Login} />
                <AuthenticatedRoute path={"/dcr-list"} page={DCRList} />
                <AuthenticatedRoute path={"/dashboard"} page={Dashboard} />
                <AuthenticatedRoute path={"/profile"} page={Profile} />
                {/* <AuthenticatedRoute path={"/master"} page={MainMaster} /> */}
                <AuthenticatedRoute path={"/chemist_master"} page={ChemistMaster} />
                <AuthenticatedRoute path={"/HQ-missed-report"} page={DoctorMissedReport} />
                <AuthenticatedRoute path={"/DCR-Summary-report"} page={DcrSummaryReport} />
                <AuthenticatedRoute path={"/help"} page={Help} />
		        <AuthenticatedRoute path={"/Report"} page={Report} />
                <AuthenticatedRoute path={"/dcr"} page={CreateNewDCR} />
                <AuthenticatedRoute path={"/MainMasterkey/:id"} page={MainMasterkey} />
                <AuthenticatedRoute path={"/dcr-common"} page={CommonDCR} />
                <AuthenticatedRoute exact path={"/visit-preparation/:id"} page={VisitPreparation} />
                <AuthenticatedRoute path={"/userprofile"} page={UserProfile} />

                <Route render={() => (<Redirect to={{pathname: '/'}} />)} />
            </Switch>
        </React.Fragment>
    )
};

const App = connect(state => ({token:state.login.token}))(_App)

export default App