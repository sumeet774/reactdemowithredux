import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Breadcrumb} from 'react-bootstrap'

import "../../../public/assets/font-awesome/css/font-awesome.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"
import { postToServer } from '../../lib/comm-utils'

import DCRHeader from '../components/DCRHeader'
import DCRListTable from '../components/DCRListTable'


import { connect } from 'react-redux'

class DCRList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFull: this.props.isFull
        }
    }
    
    static getDerivedStateFromProps(nextState, prevState){
        if(prevState.isFull !== nextState.isFull)
            return{isFull: nextState.isFull}
        return null
    }

    render(){
        return(
            <div  className="content-spacing">
                <div className="dcr-head">
                    <div>
                        <h4 className="daily-call-report">{this.props.token}Daily Call Report</h4>
                    </div>
                    <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>DCR List</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>

                <div className="dcr-list-sec">
                    <div className={this.state.isFull ? "fullscreenView" : ''}>
                        <DCRHeader />
                        <DCRListTable />
                    </div>
                </div>  
                
                <div className="add-new-dcr">
                <Link to={"/dcr-common"} ><img src="../public/assets/images/add-icon.svg"  alt="add_icon" /></Link>
                </div>            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFull: state.DCRList.isFull
})

export default connect(mapStateToProps, null)(DCRList)