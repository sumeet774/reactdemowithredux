import React,{Component} from 'react'
import {Breadcrumb,Tabs, Tab} from 'react-bootstrap'
import FieldWorkDWR from '../components/FieldWorkDWR'

class CommonDCR extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'field-work',
        };
    }
    render(){
        return(
                <div className="content-spacing">
                    <div className="dcr-head">
                        <div>
                            <h4 className="daily-call-report">Create DWR Entry</h4>
                        </div>
                        <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            <div className="activityBtn" onClick={this.handleShowModal}>
                                <img src="../public/assets/images/add-icon.svg" className="exportImgPad" />Other Activity
                            </div>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">DWR List</Breadcrumb.Item>
                            <Breadcrumb.Item active>DWR Entry</Breadcrumb.Item>
                        </Breadcrumb>
                        </div>

                    </div>
                    <Tabs
                        id="controlled-tab-example"
                        className="dcrtab"
                        activeKey={this.state.key}
                        onSelect={key => this.setState({ key })}
                    >
                        <Tab eventKey="field-work" title="Field Work DWR">
                            <FieldWorkDWR />
                        </Tab>
                        <Tab eventKey="other-work" title="Other Work Type DWR">
                            
                        </Tab>
                    </Tabs>
                   
                </div>
                )
    }
}
export default CommonDCR

