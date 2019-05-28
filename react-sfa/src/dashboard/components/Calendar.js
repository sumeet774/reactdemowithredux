import React, {Component} from 'react'
import moment from 'moment'
import './calendar.css'

class Calendar extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            currentDate: moment(),
            date: moment().startOf("week").day("Sunday"),
            month: moment(),
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.renderLabel = this.renderLabel.bind(this)
    }
    
    previous() {
        const {
            date,
        } = this.state;
        this.setState({
            date: date.subtract(1, 'w'),
        });
    }
  
    next() {
        const {
            date,
        } = this.state;
  
        this.setState({
            date: date.add(1,'w'),
        });
    }
  
    renderLabel() {
        const {
            currentDate,
        } = this.state;
       
        return <span className="month-label">{currentDate.format("DD MMM YYYY")}</span>;
    }
  
    render() {
        const {
            date,
            month,
        } = this.state;
        return (
            <div className="calendar-sec">
                <div className="calendar">
                    <div className="cal-header">
                        <div className="month-display cal-row">
                            <i className="arrow fa fa-angle-left" onClick={this.previous}/>
                            {this.renderLabel()}
                            <i className="arrow fa fa-angle-right" onClick={this.next}/>
                        </div>
                        <DayNames />
                    </div>
                    <Week 
                        date={date.clone()} 
                        month={month} 
                    />
                </div>
                    <div className="indication">
                    <div className="indication-sec dcr-filled-indi">DCR Filled</div>
                    <div className="indication-sec dcr-missed-indi">DCR Missed</div>
                    <div className="indication-sec holiday-indi">Holiday</div>
                </div>
            </div>
        );
    }
}
  
class DayNames extends Component {
    render() {
        return (
            <div className="cal-row day-names">
                <span className="day">Su</span>
                <span className="day">Mo</span>
                <span className="day">Tu</span>
                <span className="day">We</span>
                <span className="day">Th</span>
                <span className="day">Fr</span>
                <span className="day">Sa</span>
            </div>
        );
    }
}
  
class Week extends Component {
    render() {
        let days = [];
        let {
            date,
            month,
        } = this.props;
        
        for (var i = 0; i < 7; i++) {
            let day = {
                name: date.format("dd").substring(0, 2),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date,
            };
            days.push(
                <Day day={day} key={i} />
            );
            date = date.clone();
            date.add(1, "day");
        }
    
        return (
            <div className="cal-row week">
                {days}
            </div>
        )
    } 
}
  
class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            dcr_filled: [ new Date('5/13/2019'), new Date('5/14/2019'), new Date('5/16/2019'), new Date('5/17/2019'), new Date('5/21/2019'), new Date('5/23/2019')],
            dcr_missed: [ new Date('5/15/2019'), new Date('5/20/2019'), new Date('5/22/2019'), new Date('5/24/2019')],
            holiday: [ new Date('5/12/2019'), new Date('5/18/2019'), new Date('5/19/2019'), new Date('5/25/2019')]
        }
    }

    render() {
        const {
            day: {
                date,
                isCurrentMonth,
                isToday,
                number
            },
        } = this.props;

        return (
            <div className={"cal-day " + (isToday ? "today" : "") + (isCurrentMonth ? "" : " different-month") } >
                <div 
                    className="cal-date"
                >{number}</div>
                <div className="event">
                    {this.state.dcr_filled.map((event, index) => (
                        <div key={index} className = { date.isSame(event) ? "dcr-filled" : null}></div>
                    ))}
                    {this.state.dcr_missed.map((event, index) => (
                        <div key={index} className = { date.isSame(event) ? "dcr-missed" : null}></div>
                    ))}
                    {this.state.holiday.map((event, index) => (
                        <div key={index} className = { date.isSame(event) ? "holiday" : null}></div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Calendar;