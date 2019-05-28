import React,{Component} from 'react'
import {Form,Dropdown} from 'react-bootstrap'
import SearchDropdown from './SearchDropdown'
import { Accordion, AccordionItem } from 'react-light-accordion';
import DoctorDetailDCR from './DoctorDetailDCR'

class FieldWorkDWR extends Component{
    constructor(props){
        super(props)
        this.state={
             data: [],
            selectedName:[],
            subList:false,
            selectedData:[],
            removeData:null
        }
        this.getSample = this.getSample.bind(this)
        this.removeItem = this.removeItem.bind(this)
        
    }
    getSample(data,id){ 
        let selectedItems = this.state.selectedData
        selectedItems.push({
            itemid:id,
            itemname:data,
           
        })
        this.setState({
            selectedData:selectedItems
        });
        
    }
    removeItem(e){ 
    
       this.state.selectedData.map(item => {
           if(item.itemid == e.target.id){
                this.setState({
                selectedData: this.state.selectedData.filter(item => item.itemid != e.target.id)
                })
           }
       })
    }
    render(){
        return(
                <React.Fragment>
                    <div className="marginTop16 dcr-list-sec">
                        <div className="dcrboxhead">
                            Search below for An activity
                        </div>
                        <div className="dcrsearch">
                            
                        <Dropdown className="multiple-dropdown marginBot10">
                            <Dropdown.Toggle id="dropdown-basic">
                                <input placeholder="Search for an identity(For Ex. Doctor Name,chemist,stockist,Hospital,(etc.)" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div>
                                    <Form>
                                        <SearchDropdown  getSample={this.getSample}  />
                                    </Form>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                         {this.state.selectedData == null  ? '':
                        <div className="selectedDiv">
                            {this.state.selectedData.map((value, index) =>{return <div key={index} className="selectedDropdown">{value.itemname}<img src="../public/assets/images/cancel.png" className="closeImg" onClick={this.removeItem} id={value.itemid} /></div>
                            })}
                        </div>} 
                    </div>
                       
                    </div>
                     {this.state.selectedData == null  ? '':
                        <div className="dcrAccordion marginTop21">
                            {this.state.selectedData.map((value, index) =>{return  <div  className="marginBottom">
                            <Accordion atomic={true}>
                                <AccordionItem title={value.itemname} >
                                    <div className="marginTop">
                                        <DoctorDetailDCR />
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </div>
                            })}
                        </div>}
                </React.Fragment>
                )
    }
}
export default FieldWorkDWR


