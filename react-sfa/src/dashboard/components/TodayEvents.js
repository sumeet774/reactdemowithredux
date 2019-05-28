import React , { Component } from 'react'

import { connect } from  'react-redux'
import { getTodayEvents } from '../../actions/calendar'

import { format } from 'date-fns'

class TodayEvents extends Component{
    constructor(props){
        super(props)
        this.state = {
            Events: ''
        }
        this.getEvent = this.getEvent.bind(this)
    }

    componentDidMount(){
        this.getEvent()
    }

    getEvent(){
        var data = {
            "index": "Event",
            "Result":"0",
            "Token": "KAPL|SHASHIKANT GARAG|PSR070|A00061|OBgZ2019-05-14T17:52:09+05:30",
            "TableName": "",
            "ColumnName": "",
            "Data": [
                {
                    "year": "2018",
                    "month": "7",
                    "Result":"1"
                }
            ]
        }
        this.props.getTodayEvents(data)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.Events != prevState.Events){
            return{...prevState, Events: nextProps.Events}
        }
    } 
    
    render(){
        const EventsList = this.state.Events
        const date = format(new Date(2019, 4, 16), "DD-MM-YYYY")
        const birthdayEvent = []
        const anniversaryEvent = []
       
        if(EventsList){
            EventsList.map(events => {
                if(events.DOB == date){
                   birthdayEvent.push(events) 
                }
            })
            EventsList.map(events => {
                if(events.DOW == date){
                    anniversaryEvent.push(events) 
                }
            })
        }
        
        const {
            Events 
        } = this.state

        if(!Events)
            return null
        return(
            <div className="events cal-scrollbar">
                <h4 className="event-head">Today's Events</h4>
                <ul className="events-list">
                    {/* <li className="yellow"><span>Dr. Kelly watson has birthday today.</span></li>
                    <li className="green"><span>Anunal day of Alkem</span></li>
                    <li className="violet"><span>Dr. Amy Luther has anniversary</span></li>  */}
                    {birthdayEvent.map((eventList, i) => (
                        <li key={i} className={eventList.DOB ? "yellow" : ""}><p>{eventList.DSCName} has {eventList.DOB ? "Birthday" : ""} today</p></li>
                    ))}
                    {anniversaryEvent.map((eventList, i) => (
                        <li key={i} className={eventList.DOB ? "violet" : ""}><p>{eventList.DSCName} has {eventList.DOB ? "Anniversary" : ""} today</p></li>
                    ))}
                </ul>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    Events: state.Calendar.Events
})

const MapDispatchToProps = dispatch => ({
    getTodayEvents: (data) => dispatch(getTodayEvents(data))
})

export default connect(MapStateToProps, MapDispatchToProps)(TodayEvents)