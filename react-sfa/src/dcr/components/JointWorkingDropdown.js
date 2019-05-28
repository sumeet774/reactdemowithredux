import React,{Component} from 'react'
import { Dropdown , Form,Button} from 'react-bootstrap'
import JointCheckbox from './JointCheckbox'
import { connect } from 'react-redux';
import { getJointDetail } from '../../actions/DCRJoint'
import JointSearchInput from './JointSearchInput'

class JointWorkingDropdown extends Component{
    constructor(props){
        super(props)
        this.state={
             data: [],
             selectedItems:[],
             filterdata:[]
        }
        this.getJoint = this.getJoint.bind(this)
        this.getData =  this.getData.bind(this)
        this.removeItem =this.removeItem.bind(this)
        this.update= this.update.bind(this)
    }
    
    componentDidMount(){
        this.getJoint()
        
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data) 
           // console.log(nextProps.data)
            return {...prevState, data:nextProps.data}
        
        return null
    }
    
    getJoint(){
        var data={
                "Header": [
                    {
                        "fsc": "mr1",
                        "fscode": "mr1",
                        "area": "TNH0012",
                        "search": "",
                        "cd": "smstest"
                    }
                ],
                "idx": "WorkWith",
                "Token": "sfakey",
                "data":"04-08-2018"
             }
        this.props.getJointDetail(data)
    }
    
    getData(data,id){ 
        let items = this.state.selectedItems.filter(item => item.itemid !== id)
        items.push({
            itemid:id,
            itemname:data,
        })
        this.setState({
            selectedItems:items
        })
    }
    
    removeItem(e){ 
        this.state.selectedItems.map(item => {
           if(item.itemid == e.target.id){
                this.setState({
                selectedItems: this.state.selectedItems.filter(item => item.itemid != e.target.id)
                })
           }
       })
    }
    update(dataArray){
        this.setState({
            filterdata:dataArray
        })
    }
    
    render(){
        const {data,filterdata} = this.state
        
         if (!data)
                return null
            
        return(
                <React.Fragment>
                <div className='jointDropdown'>
                <Dropdown className="multiple-dropdown marginBot10 ">
                    <Dropdown.Toggle id="dropdown-basic">
                        <JointSearchInput   data={this.state.data} update={this.update} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <div>
                        {filterdata == '' ?
                        <Form>
                            {data.map((item,index) => ( 
                                <div key={index} className="jointDiv">  
                                    <JointCheckbox key={index} itemname={item.desg} id={item.cd} getData={this.getData} />
                                </div>
                            ))}
                        
                        </Form> :
                                <Form>
                            {filterdata.map((item,index) => ( 
                                <div key={index} className="jointDiv">  
                                    <JointCheckbox key={index} itemname={item.desg} id={item.cd} getData={this.getData} />
                                </div>
                            ))}
                        
                        </Form> }
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                {this.state.selectedItems == null ? '':
                <div className="selectedDiv">
                {this.state.selectedItems.map((value,index)=> {
                    
                    if(value.itemname == false){
                        return null
                    }else{
                        return(<div key={index} className="selectedDropdown">{value.itemname}<img src="../public/assets/images/cancel.png" className="closeImg" onClick={this.removeItem} id={value.itemid}  /></div>)
                    }
                })}
                </div>}
                </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({ 
    data:state.DCRJoint.data
})

const mapDispatchToProps = dispatch => ({
    getJointDetail:(data) => dispatch(getJointDetail(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(JointWorkingDropdown)

