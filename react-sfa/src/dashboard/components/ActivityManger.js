import React, {Component} from 'react'
import {Tabs, Tab} from 'react-bootstrap'

import TodoTaskList from './TodoTaskList'
import TodayEvents from './TodayEvents'
import CompletedTaskList from './CompletedTaskList'
import Calendar from './Calendar'

class ActivityManger extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'to-do-list',
            isFull: false
        };
        this.handleView = this.handleView.bind(this)
    }

    handleView(){
        this.setState({
            isFull: !this.state.isFull
        })
    }

    render(){
        return(
            <div className={this.state.isFull ? "fullscreenView" : "right-sidebar"}>
                <div className="relative">
                    <Tabs
                        id="controlled-tab-example"
                        className="sidebar-nav"
                        activeKey={this.state.key}
                        onSelect={key => this.setState({ key })}
                    >
                        <Tab eventKey="to-do-list" title="To do list">
                            <div className="slide-up">
                                <Calendar />
                                <TodoTaskList />
                                <TodayEvents />
                            </div>
                        </Tab>
                        <Tab eventKey="completed" title="Completed">
                            <div className="slide-up weekly-tasklist cal-scrollbar">
                                <CompletedTaskList />
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="sidebar-fullscreen">
                        <img src="../public/assets/images/fullscreen-white.svg" alt="fullscreen-img"  onClick={this.handleView}   />
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityManger