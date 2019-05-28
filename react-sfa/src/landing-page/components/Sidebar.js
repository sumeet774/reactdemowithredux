import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Container,Row,Col,Dropdown,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Accordion, AccordionItem } from 'react-light-accordion';
import Collapsible from 'react-collapsible';

import Parent from './Menuparent'
import { postToServer } from '../../lib/comm-utils'
import '../../../public/assets/css/bootstrap.min.css'
import '../../../public/assets/css/style.css'
import '../../../public/assets/css/responsive.css'
import 'react-light-accordion/demo/css/index.css';



class Sidebar extends Component{
    constructor(props) {
        super(props);
       
		this.state = {
            active: false,
            parentlist:[],
            
        };
    }

    componentDidMount(){
         const _this=this
        var data ={
            "index": "Menu",
            "Result":"0",
            "Token": "sfa360|MR1(Salem)|MR1|TNH0012|UX2019-05-02T09:05:36+05:30",
            "TableName": "",
            "ColumnName": "",
            "Data": [
              {
                "year": "2018",
                "month": "7",
                "Result":"1"
              }
            ]
           }
        postToServer("Temp", data).then(function (result) {    
            //console.log(result.data["Parent"],'sinha')    
            _this.setState({parentlist :  result.data})
            
//             result.data["Parent"].map((kk)=>{ 
// console.log(kk,'sinha')

//             })
        
        
        })
    }
    

    render(){

        const menu=this.state.parentlist
        const showIcon = () =>{ 
            var element = document.getElementById("app");
            element.classList.toggle("hideMenu");
        } 
        const rotate = (id) =>{ 
          var img =  document.getElementById(id);
          img.classList.add("rotateImg");
        }
     //var classes = this.state.active ? 'hideMenu' : ''

        return(
            <div>
                <div className="sidebar">
                    <div className="sidebarlogo">
                        <div className="logo">
                            <img src="../public/assets/images/logo.svg" className="companylogo"/>
                        </div>
                        <div className="menuImg toggle-left-nav-btn inline-block pull-left">
                            <img src="../public/assets/images/Hamburger-menu.svg" onClick={() => showIcon()} />
                        </div>
                    </div>
                    <div className="scrollbar">
                        <div className="underscroll">
                            <div className="titlehead_drop">
                            <Accordion atomic="true">

                               <div className="menuIconPad">
                                        <NavLink activeClassName='is-active' className="sumeet" exact={true} to='/dashboard'>
                                            <img src="../public/assets/images/dashboard-icon.svg" />
                                            <span className="menuIconText">Dashboard</span>
                                        </NavLink>
                                    </div>
                                    <div className="menuIconPad">
                                        <NavLink activeClassName='is-active' className="sumeet" exact={true} to='/dcr-list'>
                                            <img src="../public/assets/images/dcr.svg" />
                                            <span className="menuIconText">DWR</span>
                                        </NavLink>
                                    </div>
                                    <div className="menuIconPad">
                                        <NavLink activeClassName='is-active' className="sumeet" exact={true} to='/'>
                                            <img src="../public/assets/images/mtp-icon.svg" />
                                            <span className="menuIconText">MTP</span>
                                        </NavLink>
                                    </div>
                            {
menu.map( (l)=><Parent  name={l["Activty Name"]} />)
                            }
                            </Accordion>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}


export default Sidebar
