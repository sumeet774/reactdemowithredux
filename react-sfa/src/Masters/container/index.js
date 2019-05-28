import React, { Component } from 'react'
// import PropTypes from 'prop-types';

// import { Row, Col, Container, Form, InputGroup, FormControl } from 'react-bootstrap'
// import { Breadcrumb } from 'react-bootstrap'

import Master from './mastercontrols'
import List from './DCRLIst'
import { connect } from 'react-redux';
import { getMASTERLEdit } from '../../actions/master'

class index extends Component {


    constructor(props) {
        super(props);
        this.state = {
            listsate:false,
            edit_data:[],
            Edit: [] };
            
        this.onChangelist =this.onChangelist.bind(this)
        this.clickrow =this.clickrow.bind(this)

    }


    static getDerivedStateFromProps(nextProps, prevState) {
    
        if(prevState.header !== nextProps.header)
            return {...prevState, header:nextProps.header}
        if(prevState.Edit !== nextProps.Edit){
            return {...prevState, Edit:nextProps.Edit}
        }
        return null
    }

    componentDidMount() {

        alert(this.props.match.params.id)

    }

    

    onChangelist(){
        const  _this=this
        if( _this.state.listsate){
            _this.setState( { listsate:false});}
     else{
        _this.setState( { listsate:true});}   
     
    }

    clickrow(data){

        var  editdata=[]
        const { header ,Edit} = this.state

        

      
        // console.log(header,'vvvvv')
        // console.log(data.target,'vvvvv')
        var editdata_object={}
        for (var key in data.target.parentElement.cells) {

            if(data.target.parentElement.cells[key]!=undefined){

         console.log(data.target.parentElement.cells[key],'name kunal')
        

            var hj=header[key]
            
            if(header[key]!=undefined){
            if(hj["title"]!=undefined){
                var keyval=hj["title"]
                editdata_object[hj["title"]]=data.target.parentElement.cells[key].textContent 
            //.log( hj["title"], header[key], data.target.parentElement.cells[key].textContent);  
            //editdata.push( { [hj["title"]]: data.target.parentElement.cells[key].textContent    }  )
            }
            }
        }
        }

        this.props.getMASTERLEdit(editdata_object)
        const  _this=this
        if( _this.state.listsate){
            _this.setState( { listsate:false});}
     else{
        _this.setState( { listsate:true});}  


        //console.log(this.state,'state object',Edit)
        // this.setState(  {edit_data:editdata})
        // data.tarKeyboardEventget.parentElement.cells.forEach(element => {

        //     console.log(element)
            
        // });

    
    }



    render() {
       
        return (
            <div className="content-spacing">
                <List clickrow={this.clickrow}   headkey= {this.state.listsate}  /> 
                <Master  edit_data={this.edit_data}    headkey= {this.state.listsate} />
                    <div className="add-new-dcr">
                        <img onClick={this.onChangelist} src="../public/assets/images/add-icon.svg" alt="add_icon" />
                    </div>
            </div>


        );


    }

}

const mapStateToProps = state => ({
    data: state.MASTERList.data,
    header: state.MASTERList.header,
    Edit: state.MASTERList.Edit
}  )

const mapDispatchToProps = dispatch => ({
    getMASTERLEdit: (data) => dispatch(getMASTERLEdit(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(index);