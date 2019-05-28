import React , { Component } from 'react' 

import {Row, Col, Form} from 'react-bootstrap'

class Samples extends Component{
    render(){
        return(
            <div className="visit-container">
                <h3 className="container-head">SAMPLES TO BE GIVEN</h3>
                <Row>
                    <Col xl={6}>
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox1"
                            label="BackPack"
                            className="sampleCheckbox"
                        />
                    </Col>
                    <Col xl={6}>
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox2"
                            label="Parker Pen"
                            className="sampleCheckbox"
                        />
                    </Col>
                    <Col xl={6}>
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox3"
                            label="Coffee Mug Set"
                            className="sampleCheckbox"
                        />
                    </Col>
                    <Col xl={6}>
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox4"
                            label="Medicine Packets"
                            className="sampleCheckbox"
                        />
                    </Col>
                    <Col xl={6}>
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox5"
                            label="Brief Case"
                            className="sampleCheckbox"
                        />
                    </Col>
                    <Col xl={6}>
                        <Form.Check 
                            custom
                            type="checkbox"
                            id="checkbox6"
                            label="Note Book"
                            className="sampleCheckbox"
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Samples