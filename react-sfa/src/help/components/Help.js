import React, {Component} from 'react';
import {Row, Col,Breadcrumb, Form, InputGroup, FormControl,Modal,Button} from 'react-bootstrap';

import Lottie from 'react-lottie'
import animationData from './lottiesuccess.json'

import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"

class Help extends Component{
    constructor(){
        super();
        this.state = {
            fileName: "",
            show: false,
            chars_left:500,
            max_char:500,
            maxlengthText:'500',
            showRemaing:true,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.handleWordCount = this.handleWordCount.bind(this);
    }
    fileUpload(event){
        this.setState({
            fileName: event.target.value
        })
    }
    handleClose() {
        this.setState({ show: false });
      }
      handleShow() {
        this.setState({ show: true, update:true,});
        setTimeout(function(){
           this.handleClose();
        }.bind(this),1500) 
      }
      handleWordCount(event){
        const charCount = event.target.value.length;
        const maxChar = this.state.max_char;
        const charLength = maxChar - charCount;
        
        this.setState({
            showRemaing:false,
            maxText:charLength
        })
    }
    render(){
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return(
            <div className="content-spacing">
                <div className="dcr-head">
                    <div>
                        <h4 className="daily-call-report">Help</h4>
                    </div>
                    <div>
                        <Breadcrumb className="dcr-breadcrumb">
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Help</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div> 
        <div className="container-fluid profilecontainer">
            <form>
                <Row className="boxrow">
                    <Col lg={10} md={10} xl={10} xs={11} className="mainbox">
                        <Form.Group className="messagenew" controlId="formGroupEmail">
                            <Form.Label className="labelhelp">Label <span className="star">*</span></Form.Label>
                            {this.state.showRemaing ?  
                                <Form.Label className="labeltext float-right">Max <span className="limit">{this.state.maxlengthText}</span> character</Form.Label>
                                :
                                <Form.Label className="labeltext float-right"><span className="limit">{this.state.maxText}</span> Character Remaining</Form.Label>
                                }
                            <Form.Control as="textarea" rows="5" className="helptext" maxLength="500" onChange={this.handleWordCount} placeholder="Write here..." required/>
                        </Form.Group>
                    </Col>
                    <Col lg={10} md={10} xl={10} xs={12} className="filebox">
                        
                        <Form.Group controlId="files">
                            <Col lg={12} md={12} xl={12} xs={12} className="buttonfile" >
                            <Form.Label className="labelbox">
                                <div className="buttonbox">
                                    <img src="../public/assets/images/attachment.svg"></img><Form.Label className="filelabel"> Upload File</Form.Label>
                                </div>
                            </Form.Label>
                                <p className="filename">{this.state.fileName}</p>
                                <Form.Control 
                                    id="files" 
                                    type="file" 
                                    onChange={this.fileUpload} 
                                    className="filehide" 
                                    accept="application/pdf,image/png, image/jpeg,.doc,.docx,application/msword" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col lg={12} md={12} xl={12} xs={12} className="notetext" >
                        <p className="notetext2">Supported Formats: doc, docx, rtf, pdf, jpg, png upto 2 MB</p>
                    </Col>
                    <Col lg={12} md={12} xl={12} xs={12} className="buttonsbox">
                        <button className="primary mr-2 sendbutton" onClick={this.handleShow}>Send Message</button>
                        <button className="secondary mr-2 clearbutton">Clear</button>
                    </Col>
                </Row>
            </form>
        </div>   

        <Modal className="lottiemodal" show={this.state.show} onHide={this.handleClose}>
                    {/* <Modal.Header>
                    </Modal.Header> */}
                    <Modal.Body className="text-center">
                    <div className="lottieanimation"> 
                            <Lottie options={defaultOptions}
                            />
                        </div>
                        <div className="successmsg">
                            <p>Message Sent Successfully!</p>
                        </div>
                        </Modal.Body>
                    {/* <Modal.Footer>
                    </Modal.Footer> */}
                </Modal>
        </div>
        )
    }
}

export default Help;