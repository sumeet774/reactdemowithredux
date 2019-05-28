import React,{Component} from 'react'
import { Dropdown , Form,Button} from 'react-bootstrap'
import PramotionsCheckbox from './PramotionsChekbox'
const samples = ["Bottel", "Diary", "Breifcase", "Medicine Sample"]
import { connect } from 'react-redux';
import { getPramotions } from '../../actions/DCRSamples'
import SearchInput from './SearchInput'


class SamplePramotionDropdown extends Component{
    constructor(props){
        super(props)
        this.state={
             data: [],
            selectedName:[],
            subList:false,
            selectedData:[],
            removeData:null,
            productName:'',
            filterdata:[]
        
        }
        this.getSample = this.getSample.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.Pramotions= this.Pramotions.bind(this)
        this.update = this.update.bind(this)
        
    }
    static getDerivedStateFromProps(nextProps, prevState) { 
        if (prevState.data !== nextProps.data) 
            //console.log(nextProps)
            return {...prevState, data:nextProps.data}
        
        return null
    }
    componentDidMount(){
        this.Pramotions()
    }
    Pramotions(){
        var data = {
                "Token": "sfa360|MR1(Salem)|MR1|TNH0012|AIAaDdKtMMZSQSxbEwU2019-05-02T11:33:51+05:30"
                ,"validate":"getSamplePromotionGiftlist"
                ,"fscode":"mr1"
                ,"date":"05/05/2019"
                ,"dcrno":"303634"
                ,"drcode":"D002016"
                ,"ntype":"1"
            }
            this.props.getPramotions(data)
    }
    getSample(data,id){ 
        let selectedItems = this.state.selectedData.filter(item=> item.itemid != id)
        selectedItems.push({
            itemid:id,
            itemname:data,
       
        })
        this.setState({
            selectedData:selectedItems
        });
        
    }
    removeItem(e){ 
    const {name , value} = e.target; 
       this.state.selectedData.map(item => {
           if(item.itemid == e.target.id){
                this.setState({
                selectedData: this.state.selectedData.filter(item => item.itemid != e.target.id),
                productName:e.target.name
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
                        <Dropdown className="multiple-dropdown marginBot10">
                                <Dropdown.Toggle id="dropdown-basic">
                                    <SearchInput   data={this.state.data} update={this.update} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <div>
                                    {filterdata == '' ?
                                    <Form>
                                        {data.map((item,index) => (
                                        <div key={index} className="sampleDiv">
                                            <PramotionsCheckbox 
                                                index={index+1} 
                                                getSample={this.getSample} 
                                                name={item.c_name}
                                                checkval={this.state.productName}
                                            />
                                        </div>
                                        ))} 
                                         </Form> :
                                         <Form>
                                        {filterdata.map((item,index) => (
                                        <div key={index} className="sampleDiv">
                                            <PramotionsCheckbox 
                                                index={index+1} 
                                                getSample={this.getSample} 
                                                name={item.c_name}
                                                checkval={this.state.productName}
                                            />
                                        </div>
                                        ))}

                                        </Form>}
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            {this.state.selectedData == null  ? '':
                            <div className="selectedDiv">
                                {this.state.selectedData.map((value, index) =>{
                                    return  <div key={index} className="selectedDropdown">{value.itemname}
                                                <img 
                                                    src="../public/assets/images/cancel.png" 
                                                    className="closeImg" 
                                                    onClick={this.removeItem} 
                                                    id={value.itemid}
                                                    name={value.itemname}
                                                />
                                            </div>
                                })}
                            </div>}
                    </div>
                </React.Fragment>
                )
    }

}

const mapStateToProps = state =>({ 
    data:state.DCRSamples.data
})

const mapDispatchToProps = dispatch => ({
    getPramotions:(data) => dispatch(getPramotions(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(SamplePramotionDropdown);

