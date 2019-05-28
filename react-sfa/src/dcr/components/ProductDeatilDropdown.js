import React, { Component } from 'react'

import { Dropdown , Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getProductDetail } from '../../actions/DCR'
import CheckboxComp from './CheckboxComp'
import SearchInput from './SearchInput'

class ProductDeatilDropdown extends Component{
    constructor(props){
        super(props)
        this.state={
             data: [],
            selectedName:[],
            subList:false,
            //selectedItem:'',
            selectedData:[],
            removedItem:'',
            filterdata:[]
            
            
        }
        this.getItem = this.getItem.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.update = this.update.bind(this)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data) 
           // console.log(nextProps.data)
            return {...prevState, data:nextProps.data}
        
        return null
    }
    componentDidMount(){
        this.getProduct()
    }
    getProduct(){
        var data ={
                "Header": [
                    {
                        "fsc": "mr1",
                        "fscode": "mr1",
                        "area": "TNH0012",
                        "search": "",
                        "cd": "smstest"
                    }
                ],
                "idx": "downloadDcrPdt",
                "Token": "sfakey"
                }
            this.props.getProductDetail(data)
    }
    
    
    getItem(data,id){ 
        let selectedItems = this.state.selectedData.filter(item => item.itemid !== id)
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
                selectedData: this.state.selectedData.filter(item => item.itemid != e.target.id),
                removedItem:e.target.name
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
                    <div className="productDetailDrop" >
                        <Dropdown className="multiple-dropdown marginBot10" >
                            <Dropdown.Toggle id="dropdown-basic">
                                <SearchInput   data={this.state.data} update={this.update} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div>
                                    {filterdata == '' ?
                                    <Form>
                                        {data.map((item,index) => (
                                            <CheckboxComp key={index} 
                                                ind={index} 
                                                docid={item.c_doc_code} 
                                                itemid={item.c_item_code} 
                                                itemname={item.c_name} 
                                                getItem={this.getItem} 
                                                removedItem={this.state.removedItem}
                                            />
                                        ))}
                                    </Form> : 
                                      
                                    <Form>
                                        {filterdata.map((item,index) => (
                                            <CheckboxComp key={index} 
                                                ind={index} 
                                                docid={item.c_doc_code} 
                                                itemid={item.c_item_code} 
                                                itemname={item.c_name} 
                                                getItem={this.getItem} 
                                                removedItem={this.state.removedItem}
                                            />
                                        ))}
                                    </Form> }
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {this.state.selectedData == null  ? '':
                        <div className="selectedDiv">
                            {this.state.selectedData.map((value, index) =>{
                                return <div key={index} className="selectedDropdown">{value.itemname}
                                            <img src="../public/assets/images/cancel.png" className="closeImg" name={value.itemname} onClick={this.removeItem} id={value.itemid} />
                                        </div>
                            })}
                        </div>}
                 </React.Fragment>
                )
  
    }
}
const mapStateToProps = state =>({ 
    data:state.DCR.data
})

const mapDispatchToProps = dispatch => ({
    getProductDetail:(data) => dispatch(getProductDetail(data))
})



export default connect(mapStateToProps,mapDispatchToProps)(ProductDeatilDropdown);