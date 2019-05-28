import React, {Component} from 'react'
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

    // this.clickrow= this.clickrow.bind(this)
    }
    
    static getDerivedStateFromProps(nextState, prevState){
        if(prevState.isFull !== nextState.isFull)
            return{isFull: nextState.isFull}
        return null
    }

   


  
    render(){

        if (this.props.headkey ){
            return null}
                return(
                    <div className="content-spacing">
                    <div className="dcr-head">
                        <div>
                            <h4 className="daily-call-report">Chemist Master</h4>
                        </div>
                        <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                            <Breadcrumb.Item active>Chemist Master</Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                    </div>
                    <div className="dcr-list-sec chemistTab">
                    <div className={this.state.isFull ? "fullscreenView" : ''}>
                        <DCRHeader />
                        <DCRListTable  clickrow={this.props.clickrow}  hidekey={this.props.listsate } />
                    </div>
                </div>  
                
                 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFull: state.DCRList.isFull
})

export default connect(mapStateToProps, null)(DCRList)