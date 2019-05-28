import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import {Form, InputGroup} from 'react-bootstrap'
import Moment from 'moment';
class Date_Control extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            
            //date: new Date,
            date:Date.now()
        });
        this.dateChanged = this.dateChanged.bind(this);
        this.state.datafull=this.props.datafull
    };

    componentDidMount() {
        this.props.handle_child(Moment(Date.now()).format('YYYY-MM-DD'),"",this.state.datafull.c_label_display,"","" )
    }

    dateChanged(d){ 
        this.setState({date: d});
        var dte = Moment(d).format('YYYY-MM-DD')
        this.props.handle_child(dte,"",this.state.datafull.c_label_display,"","" )
    }
    render(){
        return(
            <div>
                <Form.Label className="customized-label">{this.props.name}</Form.Label>
                    <InputGroup className="datepickerAligment controls">
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.dateChanged}
                            dateFormat="dd-MM-YYYY"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>
                                <img src="../public/assets/images/calendar.svg" alt="calendar" />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
            </div>
        )
    }
}
export default Date_Control;