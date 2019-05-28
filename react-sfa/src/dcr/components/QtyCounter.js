import React,{Component} from 'react'

class QtyCounter extends Component{
    constructor(props) {
        super(props);
        this.state={}
        
    }
    render(){
        return(
                <React.Fragment>
               
                    <div className="flex-row">
                    
                        <div onClick = {this.props.decrement} className="counterBtnleft"> <img src="../public/assets/images/SUBTRACTION.svg" /></div> 
                        <div className="counternum">{this.props.counter}</div>
                        <div onClick = {this.props.increment} className="counterBtnright"><img src="../public/assets/images/PLUS.svg" /></div>
                    </div>
                </React.Fragment>
                )
    }
}
export default QtyCounter

