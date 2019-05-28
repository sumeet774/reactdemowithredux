import React,{Component} from 'react'
import { Dropdown , Form,Button,Row,Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getPobDetails } from '../../actions/DCRPob'
import QuantityInput from './QuantityInput'
import POBSearchInput from './POBSearchInput'


class POBDropdown extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            value:0,
            totalval:0,
            nqty:0,
            totalArray:[],
            subtotal:0,
            itemname:'',
            itemnameArray:[],
            showData:[],
            item_id:[],
            isButtonDisabled:true,
            filterdata:[]
            
           
        }
        this.getPob = this.getPob.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.subTotal = this.subTotal.bind(this)
        this.save =this.save.bind(this)
        this.deleteItem= this.deleteItem.bind(this)
        this.deleteTotal = this.deleteTotal.bind(this)
        this.Total = this.Total.bind(this)
        this.update = this.update.bind(this)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.data !== nextProps.data) 
           // console.log("data=",nextProps.data)
            return {...prevState, data:nextProps.data}
        
        return null
    }
    componentDidMount(){
        this.getPob();
    }
    
    
    getPob(){
        var data = {
                "Header": [
                    {
                        "fsc": "mr1",
                        "fscode": "mr1",
                        "area": "TNH0012",
                        "search": "",
                        "cd": "smstest"
                    }
                ],
                "idx": "downloadDocItemRateMst",
                "Token": "sfakey",
                "data":"04-08-2018"
            }
        this.props.getPobDetails(data)
    }
  
     handleChange(index,qty,id){ 
        if(this.state.isButtonDisabled == true){
            this.setState({
                 isButtonDisabled:!this.state.isButtonDisabled
            })
        }
        const totalArray = this.state.data;
        totalArray[index].nqty = qty;
        this.setState({
           data:totalArray,
        })
     //console.log(totalArray)
    }
    subTotal(){
       let subTotal = 0;
       
        this.state.data.map((item,index)=>{ 
            if(item.nqty != undefined){
                subTotal = subTotal + parseInt(item.rate * item.nqty)
            }else{
                subTotal = subTotal + parseInt(item.rate * this.state.nqty)
            }
        })
        
        return subTotal 
    }
    
    save(e){ 
    
        if(this.state.isButtonDisabled == false){
            this.setState({
                isButtonDisabled: !this.state.isButtonDisabled
            });
        }
        this.state.data.map((item,index)=>{ 
            this.setState({
                itemnameArray:[]
            })
            if(item.nqty != undefined && item.nqty != 0){
                this.state.itemnameArray.push({
                    itemid:item.cd,
                    itemname:item.nm,
                    itemqty:item.nqty,  
                    itemrate:item.rate
                })
               
            }
        }) 
       
        this.setState({
            showData:this.state.itemnameArray
        })
        
    }
    deleteItem(e){ 
        this.state.showData.map((item,index) => { 
           if(item.itemid == e.target.id){ 
                this.setState({
                value:0,
                showData: this.state.showData.filter(item => item.itemid != e.target.id)
                })
              // this.handleChange(index,this.state.value,e.target.id) 
              this.deleteTotal(e.target.id)
           }
       })
    
   
  
    }
    deleteTotal(id){ 
        
        this.state.data.map((item,index) =>{ 
            if(item.cd == id){ 
                this.state.data[index].nqty = 0;
               // console.log(this.subTotal())
                
            }
           
        })
    }
    Total(iqty,irate){
        return parseInt(iqty * irate)
    }
    update(dataArray){ 
        this.setState({
            filterdata:dataArray
        })
    }
  
    render(){
        const { data ,filterdata} = this.state
        
        if(!data) 
            return null
        
            return(
                <div className="pobDrop productDetailDrop">
                    <Dropdown className="multiple-dropdown marginBot10">
                        <Dropdown.Toggle id="dropdown-basic">
                            <POBSearchInput   data={this.state.data} update={this.update} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <div >
                        {filterdata == '' ?
                        <div className="pobmenu">
                        {data.map((item,index)=>(
                            <div key={index}  className="pobDiv">
                                <div className="borderBot">
                                    <div className="productNameSec">{item.nm.toLowerCase()}</div>
                                        <div className=" padding15 productDetSec">
                                            <Row>
                                                <Col lg={3} md={3} sm={6} xs={12} >
                                                    <div className="flexrows">
                                                        <div>Price:{item.rate}</div>

                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4} sm={6} xs={12} >
                                                    <div className="flexrows">
                                                    <Row>
                                                        <Col lg={6} md={6} sm={6} xs={6} >
                                                        <div>Quantity:</div>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={6} xs={6}  >
                                                            <QuantityInput 
                                                                ind ={index}
                                                                id={item.cd}
                                                                value={this.state.nqty}
                                                                rate={item.rate}
                                                                total={this.state.totalval}
                                                                update={this.handleChange} 
                                                                Total = {this.Total(item.nqty,item.rate)}
                                                            />
                                                        </Col>
                                                    </Row>

                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} xs={6} >
                                                    <div className="flexrows totalRow">
                                                        <div>Total:&nbsp;
                                                            {item.nqty == undefined ? 
                                                            
                                                            <span>{this.state.nqty * item.rate}.00</span>:
                                                            <span>{Math.round(item.nqty * item.rate)}.00</span>}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={2} md={2} sm={6} xs={12}></Col>
                                            </Row>
                                        </div>
                                </div>
                            </div>
                        ))}
                            <div className="pobDiv ">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3} ></Col>
                                <Col lg={4} md={4} sm={4} xs={4} ></Col>
                                <Col lg={5} md={5} sm={5} xs={5} >
                                    <div className="flexrows">
                                        <div>Total:&nbsp;&nbsp;</div>
                                        <div>{this.subTotal()}.00</div>
                                    </div>
                                </Col>
                                
                            </Row>
                                
                            </div>
                           
                        </div>:
                                 <div className="pobmenu">
                        {filterdata.map((item,index)=>(
                            <div key={index}  className="pobDiv">
                                <div className="borderBot">
                                    <div className="productNameSec">{item.nm.toLowerCase()}</div>
                                        <div className=" padding15 productDetSec">
                                            <Row>
                                                <Col lg={3} md={3} sm={6} xs={12} >
                                                    <div className="flexrows">
                                                        <div>Price:{item.rate}</div>

                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4} sm={6} xs={12} >
                                                    <div className="flexrows">
                                                    <Row>
                                                        <Col lg={6} md={6} sm={6} xs={6} >
                                                        <div>Quantity:</div>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={6} xs={6}  >
                                                            <QuantityInput 
                                                                ind ={index}
                                                                id={item.cd}
                                                                value={this.state.nqty}
                                                                rate={item.rate}
                                                                total={this.state.totalval}
                                                                update={this.handleChange} 
                                                                Total = {this.Total(item.nqty,item.rate)}
                                                            />
                                                        </Col>
                                                    </Row>

                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} xs={6} >
                                                    <div className="flexrows totalRow">
                                                        <div>Total:&nbsp;
                                                            {item.nqty == undefined ? 
                                                            
                                                            <span>{this.state.nqty * item.rate}.00</span>:
                                                            <span>{Math.round(item.nqty * item.rate)}.00</span>}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={2} md={2} sm={6} xs={12}></Col>
                                            </Row>
                                        </div>
                                </div>
                            </div>
                        ))}
                            <div className="pobDiv ">
                            <Row>
                                <Col lg={3} md={3} sm={3} xs={3} ></Col>
                                <Col lg={4} md={4} sm={4} xs={4} ></Col>
                                <Col lg={5} md={5} sm={5} xs={5} >
                                    <div className="flexrows">
                                        <div>Total:&nbsp;&nbsp;</div>
                                        <div>{this.subTotal()}.00</div>
                                    </div>
                                </Col>
                                
                            </Row>
                                
                            </div>
                           
                        </div>}
                        </div>
                         <div className="pobSaveBtn">
                                <button  onClick={ this.save} id={this.state.item_id} disabled={this.state.isButtonDisabled}>DONE</button>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="selectedDiv">
                        {this.state.showData.map((item,index) =>{
                            return <div key={index} className="selectedDropdown">{item.itemname+"(Qty."+item.itemqty+")"+"(Rs."+item.itemrate+")"}<img src="../public/assets/images/cancel.png" className="closeImg"  onClick={this.deleteItem} id={item.itemid} /></div>
                        })}
                    </div>
                    
                </div>
                )
    }
}
const mapStateToProps = state =>({
     data:state.DCRPob.data
})


const mapDispatchToProps = dispatch =>({
    getPobDetails:(data) => dispatch(getPobDetails(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(POBDropdown)


