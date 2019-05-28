import React, {Component} from 'react';
import { Form} from 'react-bootstrap'
import SampleSubCounterComp from './SampleSubCounterComp'



class PramotionsCheckbox extends Component{
    constructor(props) {
        super(props);
        this.state={
            checked: false,
            counter: 0,
            showQtyCount:false
            
        }
      
    }
    handleChange(event) { 
        const { name,checked,value} = event.target
         this.setState({
                    showQtyCount:!this.state.showQtyCount,
                    checked:checked
            })
     
        
        let item_Value = false
        if(checked){ 
            this.setState({
                QtyCount:true
            })
           // if(value >= 1){ console.log("hi")
                item_Value= name+"(0"+value+")";
                this.setState({
                   itemname:name,
                   disable:false
                },this.props.getSample(item_Value,event.target.id))
            
           // }
        }
    } 
   
    render(){
    
      return(
            <React.Fragment>
                <div>
                    <SampleSubCounterComp 
                        index={this.props.index}
                        id={this.props.index}
                        proName={this.props.name } 
                        counterLink={this.state.showQtyCount}
                        update ={this.handleChange.bind(this)}
                        getSample={this.props.getSample}
                        checked={this.state.checked}
                        
                    />
           
                </div>
                
            </React.Fragment>
            );
        }
    }
 export default PramotionsCheckbox;