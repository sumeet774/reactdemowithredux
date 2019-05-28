import React, {Component} from 'react'
import {Breadcrumb,Row,Col,Dropdown,Form,Table} from 'react-bootstrap'

import "../../../public/assets/font-awesome/css/font-awesome.css"
import "../../../public/assets/css/bootstrap.min.css"
import "../../../public/assets/css/style.css" 
import "../../../public/assets/css/responsive.css"

class DissDropDown extends Component{

    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle className="drprofilrdrop" id="dropdown-basic">
                    <span>Discussion Details with Product Trend</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="doctor-dropdown">
                    <Row className="rcrow">
                        <Col xl={12} md={12} sm={12} xs={12} className="maindivdrop">
                            <div className="dropheading">DCR Date</div>
                            <div className="dropdate">17th, March 2019</div>
                            <div className="dropheading">In Clinic Discussion Message</div>
                            <div className="dropdiss">Discussed about sinus & want more sample.</div>
                            <div className="dropheading">Detailed Product</div>
                            <div className="table-responsive">
                            <Table className="droptablebig table">
                                <thead className="droptable">
                                    <tr className="dropheadrow">
                                    <th className="dropheadhead">Product Name</th>
                                    <th className="dropheadhead">Neighborhood</th>
                                    <th className="dropheadhead">Gain</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tableinnerlist">
                                    <td className="productname"><span className="percentdrop"><img className="pupgreen" src="../public/assets/images/upgreen.svg" /> 12.9% </span> Avastin 100 mg</td>
                                    <td className="productname">
                                        <p className="neighbourname">Amba Shakti Medical</p>
                                        <p className="neighbourname">Medico Medical</p>
                                        <p className="neighbourname">Alura Medical</p>
                                    </td>
                                    <td className="productname">
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                        <p className="dropgain"><img className="upgreen" src="../public/assets/images/downred.svg" /> 8.60%</p>
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                    </td>
                                    </tr>
                                    <tr className="tableinnerlist">
                                    <td className="productname"><span className="percentdrop"><img className="pupgreen" src="../public/assets/images/upgreen.svg" /> 12.9% </span> Avastin 100 mg</td>
                                    <td className="productname">
                                        <p className="neighbourname">Amba Shakti Medical</p>
                                        <p className="neighbourname">Medico Medical</p>
                                        <p className="neighbourname">Alura Medical</p>
                                    </td>
                                    <td className="productname">
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                        <p className="dropgain"><img className="upgreen" src="../public/assets/images/downred.svg" /> 8.60%</p>
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                    </td>
                                    </tr>
                                    <tr className="tableinnerlist">
                                    <td className="productname"><span className="percentdrop"><img className="pupgreen" src="../public/assets/images/upgreen.svg" /> 12.9% </span> Avastin 100 mg</td>
                                    <td className="productname">
                                        <p className="neighbourname">Amba Shakti Medical</p>
                                        <p className="neighbourname">Medico Medical</p>
                                        <p className="neighbourname">Alura Medical</p>
                                    </td>
                                    <td className="productname">
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                        <p className="dropgain"><img className="upgreen" src="../public/assets/images/downred.svg" /> 8.60%</p>
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                    </td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col xl={12} md={12} sm={12} xs={12} className="maindivdrop">
                            <div className="dropheading">DCR Date</div>
                            <div className="dropdate">17th, March 2019</div>
                            <div className="dropheading">In Clinic Discussion Message</div>
                            <div className="dropdiss">Discussed about sinus & want more sample.</div>
                            <div className="dropheading">Detailed Product</div>
                            <div className="table-responsive">
                            <Table className="droptablebig table">
                                <thead className="droptable">
                                    <tr className="dropheadrow">
                                    <th className="dropheadhead">Product Name</th>
                                    <th className="dropheadhead">Neighborhood</th>
                                    <th className="dropheadhead">Gain</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tableinnerlist">
                                    <td className="productname"><span className="percentdrop"><img className="pupgreen" src="../public/assets/images/upgreen.svg" /> 12.9% </span> Avastin 100 mg</td>
                                    <td className="productname">
                                        <p className="neighbourname">Amba Shakti Medical</p>
                                        <p className="neighbourname">Medico Medical</p>
                                        <p className="neighbourname">Alura Medical</p>
                                    </td>
                                    <td className="productname">
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                        <p className="dropgain"><img className="upgreen" src="../public/assets/images/downred.svg" /> 8.60%</p>
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                    </td>
                                    </tr>
                                    <tr className="tableinnerlist">
                                    <td className="productname"><span className="percentdrop"><img className="pupgreen" src="../public/assets/images/upgreen.svg" /> 12.9% </span> Avastin 100 mg</td>
                                    <td className="productname">
                                        <p className="neighbourname">Amba Shakti Medical</p>
                                        <p className="neighbourname">Medico Medical</p>
                                        <p className="neighbourname">Alura Medical</p>
                                    </td>
                                    <td className="productname">
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                        <p className="dropgain"><img className="upgreen" src="../public/assets/images/downred.svg" /> 8.60%</p>
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                    </td>
                                    </tr>
                                    <tr className="tableinnerlist">
                                    <td className="productname"><span className="percentdrop"><img className="pupgreen" src="../public/assets/images/upgreen.svg" /> 12.9% </span> Avastin 100 mg</td>
                                    <td className="productname">
                                        <p className="neighbourname">Amba Shakti Medical</p>
                                        <p className="neighbourname">Medico Medical</p>
                                        <p className="neighbourname">Alura Medical</p>
                                    </td>
                                    <td className="productname">
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                        <p className="dropgain"><img className="upgreen" src="../public/assets/images/downred.svg" /> 8.60%</p>
                                        <p className="dropgain"><img className="downred" src="../public/assets/images/downred.svg" /> 5.99%</p>
                                    </td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default DissDropDown