import React,{Component} from 'react'
import {Table} from 'react-bootstrap'
import Collapsible from 'react-collapsible';

class RCPA extends Component{
    render(){
        return(
            <div>
                <div className="dcrPopupPad">
                    <div className="productInfo">
                        <Collapsible trigger={
                            <div className="product-sec">
                                <div className="product-img">
                                    <img src="../public/assets/images/medicine-img.svg" />
                                </div>
                                <div className="product-details">
                                    <div className="productName">AtMax 500mg</div>
                                    <div className="productSubTxt">Analysis based on chemist report </div>
                                </div>
                                <div className="toggle-img"><img src="../public/assets/images/arrow-grey@2x.png"/></div>
                            </div>}
                            >
                            <div className="product-detail-list">
                                <ul>
                                    <li>prescripbed:72</li>
                                    <li>value:70000</li>
                                    <li>Competative Brand:70000 <span className="playImgPad"><img src="../public/assets/images/play-button.svg"/></span></li>
                                </ul>
                            </div>
                            <div className="tableBox">
                                <Table responsive width="336px">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Prescribed</th>
                                            <th>Value</th>
                                            <th>Qt.</th>
                                            <th>%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>c-max</td>
                                            <td>40</td>
                                            <td>5000.00</td>
                                            <td>100</td>
                                            <td>23%</td>
                                        </tr>
                                        <tr>
                                            <td>Zomatol</td>
                                            <td>10</td>
                                            <td>1000.00</td>
                                            <td>20</td>
                                            <td>08%</td>
                                        </tr>
                                        <tr>
                                            <td>Apex</td>
                                            <td>10</td>
                                            <td>1000.00</td>
                                            <td>20</td>
                                            <td>08%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Collapsible>
                    </div>
                    <div className="productInfo">
                        <Collapsible trigger={
                            <div className="product-sec">
                                <div className="product-img">
                                    <img src="../public/assets/images/medicine-img.svg" />
                                </div>
                                <div className="product-details">
                                    <div className="productName">AtMax 500mg</div>
                                    <div className="productSubTxt">Analysis based on chemist report </div>
                                </div>
                                <div className="toggle-img"><img src="../public/assets/images/arrow-grey@2x.png"/></div>
                            </div>}
                            >
                            <div className="product-detail-list">
                                <ul>
                                    <li>prescripbed:72</li>
                                    <li>value:70000</li>
                                    <li>Competative Brand:70000 <span className="playImgPad"><img src="../public/assets/images/play-button.svg"/></span></li>
                                </ul>
                            </div>
                            <div className="tableBox">
                                <Table responsive width="336px">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Prescribed</th>
                                            <th>Value</th>
                                            <th>Qt.</th>
                                            <th>%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>c-max</td>
                                            <td>40</td>
                                            <td>5000.00</td>
                                            <td>100</td>
                                            <td>23%</td>
                                        </tr>
                                        <tr>
                                            <td>Zomatol</td>
                                            <td>10</td>
                                            <td>1000.00</td>
                                            <td>20</td>
                                            <td>08%</td>
                                        </tr>
                                        <tr>
                                            <td>Apex</td>
                                            <td>10</td>
                                            <td>1000.00</td>
                                            <td>20</td>
                                            <td>08%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Collapsible>
                    </div>
                    <div className="productInfo">
                        <Collapsible trigger={
                            <div className="product-sec">
                                <div className="product-img">
                                    <img src="../public/assets/images/medicine-img.svg" />
                                </div>
                                <div className="product-details">
                                    <div className="productName">AtMax 500mg</div>
                                    <div className="productSubTxt">Analysis based on chemist report </div>
                                </div>
                                <div className="toggle-img"><img src="../public/assets/images/arrow-grey@2x.png"/></div>
                            </div>}
                            >
                            <div className="product-detail-list">
                                <ul>
                                    <li>prescripbed:72</li>
                                    <li>value:70000</li>
                                    <li>Competative Brand:70000 <span className="playImgPad"><img src="../public/assets/images/play-button.svg"/></span></li>
                                </ul>
                            </div>
                            <div className="tableBox">
                                <Table responsive width="336px">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Prescribed</th>
                                            <th>Value</th>
                                            <th>Qt.</th>
                                            <th>%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>c-max</td>
                                            <td>40</td>
                                            <td>5000.00</td>
                                            <td>100</td>
                                            <td>23%</td>
                                        </tr>
                                        <tr>
                                            <td>Zomatol</td>
                                            <td>10</td>
                                            <td>1000.00</td>
                                            <td>20</td>
                                            <td>08%</td>
                                        </tr>
                                        <tr>
                                            <td>Apex</td>
                                            <td>10</td>
                                            <td>1000.00</td>
                                            <td>20</td>
                                            <td>08%</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Collapsible>
                    </div>
                </div>
            </div>
        )
    }
}
export default RCPA
