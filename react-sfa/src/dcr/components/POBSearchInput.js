import React,{Component} from 'react'

class POBSearchInput extends Component{
    constructor(props){
        super(props)
        this.state={
           value:''
        }
        this.handleSearch = this.handleSearch.bind(this)
        
    }
    handleSearch(event){ console.log(event.target.value)
        
        this.setState({ value: event.target.value })
        const filteredSuggestions = this.props.data.filter(
                                                suggestion => suggestion.nm.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
                                    );
        this.setState({

        },this.props.update(filteredSuggestions))
    }
    
    
    render(){
        return(
                <div>
                    <input 
                        placeholder="search & select products"  
                        onChange={this.handleSearch} 
                        value={this.state.value} 
                       
                    />
                </div>
                )
    }
}
export default POBSearchInput
