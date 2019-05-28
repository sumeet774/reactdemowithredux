import React, {Component} from "react"

import {Form, Dropdown} from 'react-bootstrap'
import { connect } from 'react-redux';
import { toggleDcrHeader, goFullView } from '../../actions/DCRList'

class DCRHeader extends Component{
    constructor(props){
        super(props)
        this.state = { 
            isFull: this.props.isFull
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleViewChange = this.handleViewChange.bind(this);
    }

    handleChange(){
        this.props.toggleDcrHeader()
    }

    handleViewChange(){
        this.props.goFullView()
    }

    static getDerivedStateFromProps(nextState, prevState){
        if(prevState.isFull !== nextState.isFull)
            return{isFull: nextState.isFull}
        return null
    }
    
    render(){
        return(
            <div className="dcr-head">
                <div>
                    <h5 className="dcr-list-sec-head">Daily Call Report List</h5>
                </div>
                <div className="dcr-head-options">
                    {
                        this.state.isFull ? 
                        <img src="../public/assets/images/calendar.svg" alt="fullscreen_img" onClick={this.handleViewChange} /> : 
                        <img src="../public/assets/images/fullscreen.svg" alt="fullscreen_img" onClick={this.handleViewChange} />
                    }
                    
                    <Dropdown>
                        <Dropdown.Toggle className="column-option" id="dropdown-basic">
                            <img src="../public/assets/images/columns-white.svg" alt="fullscreen_img" />
                            <span>Column Option</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="column-dropdown">
                            <h5 className="drop-head">Columns to be shown</h5>
                            <Form>
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox1"
                                    label="DCR No"
                                    checked="true"
                                    className="column-label"
                                />
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox2"
                                    label="DCR Date"
                                    checked="true"
                                    className="column-label"
                                />
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox3"
                                    label="Entry Date"
                                    checked="true"
                                    className="column-label"
                                />
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox4"
                                    label="Place of Work"
                                    checked="true"
                                    className="column-label"
                                />
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox5"
                                    label="Doctor Visited"
                                    checked="true"
                                    className="column-label"
                                />
                                    <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox6"
                                    label="Retailer Visited"
                                    checked="true"
                                    className="column-label"
                                />
                                    <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox5"
                                    label="Stocklist Visited"
                                    checked="true"
                                    className="column-label"
                                />
                                    <Form.Check 
                                    custom
                                    type="checkbox"
                                    id="checkbox5"
                                    label="Additional Doctor Visited"
                                    checked="true"
                                    className="column-label"
                                />
                            </Form>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button onClick={this.handleChange} className="hide-tablehead-btn">Hide <span className="hide-mobile">Table Header</span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFull: state.DCRList.isFull
})

const mapDispatchToProps = dispatch => ({
    toggleDcrHeader: () => dispatch(toggleDcrHeader()),
    goFullView: () => dispatch(goFullView())
})

export default connect(mapStateToProps, mapDispatchToProps)(DCRHeader)