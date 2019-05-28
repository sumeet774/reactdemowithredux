import React, {Component} from 'react'
import { CalendarComponent, RenderDayCellEventArgs  } from '@syncfusion/ej2-react-calendars';

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-react-calendars/styles/material.css";

class CalendarBackup extends Component{

    highlightWeekend(RenderDayCellEventArgs) {
        var args = RenderDayCellEventArgs

        const dcrMissed = [new Date('4/1/2019'), new Date('4/2/2019')]
        let dcrMissedEle = HTMLElement;
        dcrMissedEle = document.createElement('div');
        dcrMissedEle.setAttribute('class', 'highlight-event dcr-missed-dot');

        dcrMissed.map( value => {
            
            if(args.date.getDate() === value.getDate() && args.date.getMonth() === value.getMonth() && args.date.getYear() === value.getYear()){
                args.element.classList.add('dcr-missed');
                args.element.appendChild(dcrMissedEle);
            }
        })

        const dcrFilled = [new Date('4/3/2019'), new Date('4/4/2019')]
        let dcrFilledEle = HTMLElement;
        dcrFilledEle = document.createElement('div');
        dcrFilledEle.setAttribute('class', 'highlight-event dcr-filled-dot');

        dcrFilled.map( value => {
            if(args.date.getDate() === value.getDate() && args.date.getMonth() === value.getMonth() && args.date.getYear() === value.getYear()){
                args.element.appendChild(dcrFilledEle);
            }
        })
        
        const birthday = [new Date('4/10/2019'), new Date('4/11/2019'), new Date('4/15/2019'), new Date('4/17/2019')]
        let birthdayEle = HTMLElement;
        birthdayEle = document.createElement('div');
        birthdayEle.setAttribute('class', 'highlight-event birthday');
            
        birthday.map( value =>{
            if (args.date.getDate() === value.getDate() && args.date.getMonth() == value.getMonth() && args.date.getYear() === value.getYear()) {
                args.element.appendChild(birthdayEle);
            }
        })

        const holiday = [new Date('4/6/2019'), new Date('4/7/2019'), new Date('4/10/2019'), new Date('4/14/2019'),new Date('4/21/2019'), new Date('4/25/2019')]
        let holidayEle = HTMLElement;
        holidayEle = document.createElement('div');
        holidayEle.setAttribute('class', 'highlight-event holiday');

        holiday.map( value =>{   
            if (args.date.getDate() === value.getDate() && args.date.getMonth() == value.getMonth() && args.date.getYear() === value.getYear()) {
                args.element.appendChild(holidayEle);
            }
        })

        const event = [new Date('4/11/2019'), new Date('4/25/2019')]
        let eventEle = HTMLElement;
        eventEle = document.createElement('div');
        eventEle.setAttribute('class', 'highlight-event event'); 

        event.map( value =>{
            if (args.date.getDate() === value.getDate() && args.date.getMonth() == value.getMonth() && args.date.getYear() === value.getYear()           ) {
                args.element.appendChild(eventEle);
            }
        })
        
    }
    render() {

        return (
            <div className="calendar-sec" style={{height:180}}>
                <CalendarComponent id="calendar" renderDayCell={this.highlightWeekend}/>
            </div>
        );
    }   
}

export default CalendarBackup;

