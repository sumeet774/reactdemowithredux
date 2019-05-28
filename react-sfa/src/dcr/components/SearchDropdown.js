import React, {Component} from 'react';
import { Form} from 'react-bootstrap'
import SearchSubComp from './SearchSubComp'

const samples = ["Dr. Ajeet kumar", "Dr. Amit Kumar", "Dr. dhir singh", "Dr. Sudhir nayak"]

class SearchDropdown extends Component{
    constructor(props) {
        super(props);
        this.state={
            checked : false,
            counter: 0,
        }
      
    }
    handleChange(event) { 
     
        const {name , checked, value} = event.target
        let item_Value = false
        if(checked){ 
           
                item_Value= name
                this.setState({
                   itemname:name,
                   disable:false
                },this.props.getSample(item_Value,event.target.id))
            
           
        }
    } 
   
    render(){
    
      return(
            <React.Fragment>
                <div>
                    <SearchSubComp 
                        index="1"
                        proName={samples[0] } 
                        update ={this.handleChange.bind(this)}
                    />
                    <SearchSubComp 
                        index="2"
                        disabled={this.state.disable}
                        proName={samples[1]}
                        update ={this.handleChange.bind(this)}
                    />
                    <SearchSubComp 
                        index="3"
                        disabled={this.state.disable}
                        proName={samples[2]} 
                        update ={this.handleChange.bind(this)}
                    />
                    <SearchSubComp 
                        index="4"
                        disabled={this.state.disable}
                        proName={samples[3]}
                        update ={this.handleChange.bind(this)}
                    />
                </div>
                
            </React.Fragment>
            );
        }
    }
 export default SearchDropdown;