import React , { Component } from 'react' 

import {Table, Form} from 'react-bootstrap'

class ProductInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFull: false
        };
        this.handleView = this.handleView.bind(this)
    }

    handleView(){
        this.setState({
            isFull: !this.state.isFull
        })
    }
    render(){
        return(
            <div className={this.state.isFull ? "fullscreenView" : ""}>
                <div className="visit-product-container">
                    <div className="product-spacing">
                        <h3 className="container-head">PRODUCT WISE TREND</h3>
                        <img src="../../public/assets/images/fullscreen.svg" alt="full-screen" onClick={this.handleView}  />
                    </div>
                    <Table responsive className="visit-product-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Overall Gain</th>
                                <th>Influencer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Check 
                                        custom
                                        type="checkbox"
                                        id="checkbox8"
                                        label="Atmoflux 500mg"
                                        className="sampleCheckbox m-0"
                                    />
                                </td>
                                <td>
                                    <span className="arrow-up">33.34</span>
                                </td>
                                <td>
                                    <ul className="product-influencer">
                                        <li><span className="arrow-up">33.34</span><span className="influencer-name">Amba Medical</span></li>
                                        <li><span className="arrow-down">33.34</span><span className="influencer-name">Amba Medical</span></li>
                                        <li><span className="arrow-down">33.34</span><span className="influencer-name">Amba Medical</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Check 
                                        custom
                                        type="checkbox"
                                        id="checkbox9"
                                        label="Atmoflux 650mg"
                                        className="sampleCheckbox m-0"
                                    />
                                </td>
                                <td>
                                    <span className="arrow-up">33.34</span>
                                </td>
                                <td>
                                    <ul className="product-influencer">
                                        <li><span className="arrow-up">33.34</span><span className="influencer-name">Amba Medical</span></li>
                                        <li><span className="arrow-down">33.34</span><span className="influencer-name">Amba Medical</span></li>
                                        <li><span className="arrow-down">33.34</span><span className="influencer-name">Amba Medical</span></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ProductInfo