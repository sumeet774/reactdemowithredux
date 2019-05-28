import React, {Component} from 'react';
import {Row,Col,Dropdown,Navbar,Nav,NavDropdown,Modal,Button,Spinner} from 'react-bootstrap';

import '../../../public/assets/css/bootstrap.min.css'
import '../../../public/assets/css/style.css'
import '../../../public/assets/css/responsive.css'
//import {PasswordMask} from 'react-password-mask';

import { injectIntl, defineMessages } from 'react-intl'

const messages = defineMessages({
    newNotifications: {
        id: 'landing-page.components.header',
        defaultMessage:'You have {messageCount} new notifications'
    }
})

class Header extends Component{
     constructor(props, context) {
		super(props, context);
         this.state = {active: false,
            show: false,
            searchbar:"",
            password:true,
            newpassword:true,
            update:true,
            updatespan:false,
            updated:false,

        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        var count=0;
        if(count==0){
            const width=screen.width;
            if(width<992 && count==0){
                var element = document.getElementById("app");
                element.classList.add("hideMenu");
            }
            count++;
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickNew = this.handleClickNew.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
     }
     handleClose() {
        this.setState({ show: false });
      }
      handleShow() {
        this.setState({ show: true, update:true,});
      }
      handleClick(){
          this.setState({ password: !this.state.password });
      }
      handleClickNew(){
          this.setState({ newpassword: !this.state.newpassword });
      }
      handleUpdate(){
        this.setState({ 
            update:false,
            updatespan:true 
        });
        setTimeout(function(){
            this.setState({ 
                updatespan:false,
                updated:true,
             }),setTimeout(function(){
                 this.setState({
                    updatespan:false,
                    updated:false,
                 })
                this.handleClose();
             }.bind(this),1000) 
        }.bind(this),2000,
        );


      }
    render(){
        const showIcon = () =>{ 
            var element = document.getElementById("app");
            element.classList.toggle("hideMenu");
        }
        const showsearch=()=>{
            //alert("k");
            var showsearch=document.getElementById("searchbar");
            showsearch.classList.remove("searchhide");
            showsearch.classList.add("showsearch"); 

            var closesearch=document.getElementById("closesearch");
            closesearch.classList.remove("searchhide");
            closesearch.classList.add("searchclose"); 

            var iconsearch=document.getElementById("iconsearch");
            iconsearch.classList.remove("searchicon");
            iconsearch.classList.add("searchhide");

            var elements = document.getElementsByClassName("navbar-toggler");
            elements[0].className += " searchhide";

            var clntlogo=document.getElementById("clientlogo");
            clntlogo.classList.add("searchhide"); 
            
        }
        const hidesearch=()=>{
            //alert("k");
            var showsearch=document.getElementById("searchbar");
            showsearch.classList.remove("showsearch");
            showsearch.classList.add("searchhide"); 

            var closesearch=document.getElementById("closesearch");
            closesearch.classList.remove("searchclose");
            closesearch.classList.add("searchhide"); 

            var iconsearch=document.getElementById("iconsearch");
            iconsearch.classList.remove("searchhide");
            iconsearch.classList.add("searchicon");

            var elements = document.getElementsByClassName("navbar-toggler");
            elements[0].classList.remove("searchhide");

            var clntlogo=document.getElementById("clientlogo");
            clntlogo.classList.remove("searchhide"); 
            
        }
        const { intl } = this.props
        return(
            <div className="header">
                <Navbar collapseOnSelect className="custnav" expand="lg"  bg="light" variant="light">
                    <Navbar.Brand href="#home">
                        <div className="mobileshow">
                            <img src="../public/assets/images/Hamburger-menu.svg" className="hambergerimage" onClick={() => showIcon()} />
                        </div>
                        <img src="../public/assets/images/client_logo.png" id="clientlogo" className="clientimage searchhide"/>
                        <div className="form-group has-search mobilesearch">
                                    <img src="../public/assets/images/search_grey.png" id="iconsearch" className="searchicon pull-right" onClick={()=>showsearch()}/>
                                    <input type="text" name="searchbar" id="searchbar" className="Rectangle-685 searchhide" placeholder="Search here"/>
                                </div>
                        <img src="../public/assets/images/close.png" id="closesearch" className="searchhide searchhide2 float-right" onClick={()=> hidesearch()}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="lefticons" id="responsive-navbar-nav">
                        <Nav className="mobilenav">
                            <div className="rightcomponents">
                                <div className="form-group has-search">
                                    <img src="../public/assets/images/search_grey.png" id="iconsearch" className="searchicon nodisplay" onClick={()=>showsearch()}/>
                                    <input type="text" name="searchbar" id="searchbar" className="Rectangle-685 searchhide" placeholder="Search here"/>
                                </div>
                            </div>
                            
                        </Nav>
                        <div className="rightcomponents media-margin">
                            <div className="dotbox">
                                <div className="ellipse-181"></div>
                                <img src="../public/assets/images/chatbot.png" className="padding_2" />
                            </div>
                        </div>
                        <div className="rightcomponents">
                            <div className="dotbox">
                                <div className="ellipse-181 new"></div>
                                <Dropdown>
                                    <Dropdown.Toggle className="languagedrop" variant="success" id="dropdown-basic">
                                        <img src="../public/assets/images/notificatio_bell-grey.png" className="padding_2" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-right scale-up notification_box">
                                        <Dropdown.Item href="#/action-1" className="notification_child">
                                            <Row>
                                            <div className="col-sm-10 col-10 notifications_head">
                                            <p>{intl.formatMessage(messages.newNotifications, {messageCount:10})}</p>
                                            </div>
                                            <div className="col-sm-2 col-2 Rectangle-805">
                                                <p href="#" className="view" style={{'color':'#ffffff'}}>View All</p>
                                            </div>
                                            </Row>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="notification_child">
                                            <Row>
                                                <div className="col-sm-2 col-2">
                                                    <div className="Ellipse-222">
                                                        <img className="innerimage" src="../public/assets/images/correct.svg"></img>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10 col-10">
                                                        <p className="status">Leave Status</p>
                                                        <p className="status-summry">Your leave request has been approved by Mr. 
                                                            Rajesh Jha (Manager).</p>
                                                        <p className="status-time">Just Now</p>    
                                                </div>
                                            </Row>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="notification_child">
                                            <Row>
                                                <div className="col-sm-2 col-2">
                                                    <div className="Ellipse-birthday">
                                                        <img className="innerimage" src="../public/assets/images/birthday-cake.svg"></img>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10 col-10">
                                                        <p className="status">Birthday</p>
                                                        <p className="status-summry">YDr. Vijay Kumar(jayanagar) has birthday today. 
                                                            wish him &amp; celebrate his birthday.</p>
                                                        <p className="status-time">Just Now</p>    
                                                </div>
                                            </Row>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="notification_child">
                                            <Row>
                                                <div className="col-sm-2 col-2">
                                                    <div className="Ellipse-reject">
                                                        <img className="innerimage2" src="../public/assets/images/reject.svg"></img>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10 col-10">
                                                        <p className="status">Request Rejected</p>
                                                        <p className="status-summry">Your leave request has been rejected by Mr. Rajesh 
                                                            Jha (Manager).</p>
                                                        <p className="status-time">Just Now</p>    
                                                </div>
                                            </Row>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="rightcomponents">
                            <div className="dotbox2">
                                <Dropdown>
                                {/* <img src="../public/assets/images/globe.png" className="img-responsive mobileglobe" /> */}
                                    <Dropdown.Toggle className="languagedrop" variant="success" id="dropdown-basic">
                                    <img src="../public/assets/images/globe.png" className="img-responsive mobileglobe" />
                                        <span className="nodisplay">English</span>  <img src="../public/assets/images/arrow-grey.png" className="img-responsive upimage nodisplay" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="language dropdown-menu-right scale-up">
                                        {/* <Dropdown.Item href="#/action-1" className="update-language"><img src="../public/assets/images/indiaflag.png" className="img-responsive flag" /> Afrikanns</Dropdown.Item> */}
                                        <Dropdown.Item href="#/action-2" className="update-language"><img src="../public/assets/images/arabiaflag.png" className="img-responsive flag" /> Arabic</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-language"><img src="../public/assets/images/chinaflag.png" className="img-responsive flag" /> Chinees</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-language"><img src="../public/assets/images/kingdomflag.png" className="img-responsive flag" /> English</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-language"><img src="../public/assets/images/germanyflag.png" className="img-responsive flag" /> German</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-language"><img src="../public/assets/images/indiaflag.png" className="img-responsive flag" /> Hindi</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="rightcomponents">
                            <div className="profileimage">
                                <Dropdown className="dropdowncustom">
                                {/* <img src="../public/assets/images/client_profile.png" className="img-responsive imsgeprofile" /> */}
                                    <Dropdown.Toggle className="userdrop" variant="success" id="dropdown-basic">
                                    <img src="../public/assets/images/client_profile.png" className="img-responsive imsgeprofile" />
                                    <div className="username"><span className="nodisplay">kelly martin</span> 
                                    <img src="../public/assets/images/arrow-grey.png" className="img-responsive dropimage nodisplay" /><br/>
                                    <p className="designation nodisplay">Medical Rep.</p></div>  
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="newclass dropdown-menu-right scale-up">
                                        <Dropdown.Item href="profile" className="update-profile">Update Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="update-profile" onClick={this.handleShow}>Change Password</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-profile">Dashboard Setting</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-profile">Menu Setting</Dropdown.Item>
                                        <Dropdown.Item href="/help" className="update-profile">Help</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className="update-profile">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                    <Modal className="headmodal" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                        <img src="../public/assets/images/cross.svg" className="crossbutton" onClick={this.handleClose} />
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-group passwordmodal">
                                <label className="passlabel">Current Password <span className="astrikred">*</span></label>
                                <input placeholder="Enter current password" name="password" id="currentpassword" className="form-control input-field passwordfield" 
                                type={this.state.password ? "password" : "text"} />
                                    <img src={this.state.password ? "../public/assets/images/eye.svg" : "../public/assets/images/eyeslash.svg"} className="passeye" id="password" onClick={this.handleClick}></img>   
                            </div>
                            <div className="form-group passwordmodal">
                                <label className="passlabel">Set New Password <span className="astrikred">*</span></label>
                                <input placeholder="Enter password" 
                                       name="newpassword"
                                       id="newpassword" 
                                       className="form-control input-field passwordfield" 
                                       type={this.state.newpassword ? "password" : "text"}  
                                       />
                                <img src={this.state.newpassword ? "../public/assets/images/eye.svg" : "../public/assets/images/eyeslash.svg"} className="passeye" id="password" onClick={this.handleClickNew}></img>   
                                {/* <span className={this.state.newpassword ? "fa fa-eye-slash passeye" : "fa fa-eye passeye"} onClick={this.handleClickNew}></span> */}
                            </div>
                            <div className="form-group passwordmodal">
                                <label className="passlabel">Re-Enter Password <span className="astrikred">*</span></label>
                                <input placeholder="Enter password" name="reenetrpassword" id="reenetrpassword" className="form-control input-field passwordfield" 
                                type="password"/>
                            </div>
                            </Modal.Body>
                        <Modal.Footer>
                            <Button className="Rectangle-96" variant="secondary" onClick={this.handleUpdate}>
                                {this.state.update ? "Update" : ""}
                                {this.state.updatespan ? <Spinner animation="border" variant="light" /> : ""}
                                {this.state.updated ? "Updated" : ""}
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </div>
        )
    }
}

export default injectIntl(Header)