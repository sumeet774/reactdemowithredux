import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import { connect } from 'react-redux';
class Text extends Component{
    constructor(props) {
        super(props);
        this.state = {
           isload:false
           
        };
        if (this.props.mandatory=="1" || this.props.mandatory=="true"){
            this.state.isload=true  
        }else {
            this.state.isload=false  
        }
}


static getDerivedStateFromProps(nextProps, prevState) {
    //console.log("cccccccccc",nextProps.header, nextProps.Edit)
    //  if(prevState.header !== nextProps.header)
    //      return {...prevState, header:nextProps.header}
     if(prevState.Edit !== nextProps.Edit){
         return {...prevState, Edit:nextProps.Edit}
     }
     return null
 }

    render(){

        const{Edit}=this.state
        console.log(Edit,'cccccccccc',this.state)



        

     //  alert(this.props.ReadOnly)
        return(
            <div>
      {/* <Form.Group controlId="formBasicEmail" className="login-form-group">  <Form.Label className="login-label">{this.props.name} </Form.Label>
          <Form.Control  className="login-form-control"  />   </Form.Group> */}
            <Form.Group controlId="formBasicEmail">
            { this.state.isload ? 
            <Form.Label className="customized-label chemistlabel">{this.props.displayname}  {this.props.ReadOnly == "true" ? "true":"false"}  <span className="colorRed">*</span></Form.Label> :
            <Form.Label className="customized-label chemistlabel">{this.props.displayname}  </Form.Label>}
            
            {this.props.ReadOnly=="true" ?
            <Form.Control type="text" value={ Edit ? Edit[[this.props.displayname]] : 'ddddd'}  readonly="true" className="customized-input" placeholder={this.props.displayname} />
           :<Form.Control type="text"  value={ Edit ? Edit[[this.props.displayname]]  : 'ddddd'}   className="customized-input" placeholder={this.props.displayname} />}

            </Form.Group>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    //data: state.MASTERList.data,
  //  header: state.MASTERList.header,
    Edit: state.MASTERList.Edit
} )

const mapDispatchToProps = dispatch => ({
    getMASTERLEdit: (data) => dispatch(getMASTERLEdit(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Text);