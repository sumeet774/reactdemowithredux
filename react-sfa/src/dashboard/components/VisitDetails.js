import React,{Component} from 'react'
import {Tabs, Tab} from 'react-bootstrap'

import LastVisitList from './LastVisitList'
import RCPA from './RCPA'


class VisitDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            key2: 'Last 3 Visit Details',
        }
    }
    render(){
        let DSCName = this.props.DSCName
        let visitDetail = this.props.visitDetail

        if(!visitDetail)
            return null
        return(
            <div className="visit-details cal-scrollbar" >
                <div className="visited-docter">
                    {DSCName}
                    <span className="pull-right pointer"><img src='../public/assets/images/cancel-white.svg' onClick={this.props.closeBar}/></span>
                </div>
                <Tabs
                    id="controlled-tab-example"
                    className="visit-details-nav"
                    activeKey={this.state.key2}
                    onSelect={key2 => this.setState({ key2 })}
                >
                    <Tab eventKey="Last 3 Visit Details" title="Last 3 Visit Details">
                        <div className="slide-up"><LastVisitList DSCName={DSCName} visitDetail={visitDetail} /></div>
                    </Tab>
                    <Tab eventKey="RCPA" title="RCPA">
                        <div className="slide-up"><RCPA /></div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default VisitDetails

