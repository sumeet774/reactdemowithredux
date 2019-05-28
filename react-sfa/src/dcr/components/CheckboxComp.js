import React, {Component} from 'react';
import { Form,Row,Col} from 'react-bootstrap'
import ProductSubCheckbox from './ProductSubCheckbox'

const titles = ["Prescriber", "Non Prescriber", "Convert", "Others"]

class CheckboxComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            index: props.ind,
            showSubList: false,
            subCheckBox: false
           
        }
        this.handleChange = this.handleChange.bind(this)
    
    }

    handleChange(event) {
        const { name, id } = event.target
        this.setState({
            showSubList: !this.state.showSubList
            
        })

    }

    updateSubSelection(event) {
        const { name, checked } = event.target
        let itemval = false
        if (checked) {
            itemval = this.props.itemname+"("+name+")";
            let pid = this.props.itemid+this.props.docid
            this.setState({subCheckBox:name}, this.props.getItem(itemval, pid))
        } 
        else {
            if (this.state.subCheckBox == name)
                this.setState({subCheckBox:false})
        }
    }

    render() {
        let {subCheckBox} = this.state
        return (
            <div className="productback">
                <Form.Check
                    custom
                    
                    type="checkbox"
                    id={"checkbox"+parseInt(this.props.ind)}
                    label={this.props.itemname.toLowerCase()}
                    className="mb-2 pad12"
                    name={this.props.itemname}
                    onChange={this.handleChange}
                />
                {
                    this.state.showSubList &&
                        <div className="productsubCheckbox">
                            <Row>
                                <Col lg={4} md={4}>
                                    <ProductSubCheckbox
                                        id={this.props.itemid+this.props.docid}
                                        proName={titles[0]}
                                        checked={subCheckBox == titles[0]}
                                        update={this.updateSubSelection.bind(this)}
                                    />
                                </Col>
                                <Col lg={6} md={6}>
                                    <ProductSubCheckbox
                                        id={this.props.itemid+this.props.docid}
                                        proName={titles[1]}
                                        checked={subCheckBox == titles[1]}
                                        update={this.updateSubSelection.bind(this)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} md={4}>
                                    <ProductSubCheckbox
                                        id={this.props.itemid+this.props.docid}
                                        proName={titles[2]}
                                        checked={subCheckBox == titles[2]}
                                        update={this.updateSubSelection.bind(this)}
                                    />
                                </Col>
                                <Col lg={4} md={4}>
                                    <ProductSubCheckbox
                                        id={this.props.itemid+this.props.docid}
                                        proName={titles[3]}
                                        checked={subCheckBox == titles[3]}
                                        update={this.updateSubSelection.bind(this)}
                                    />
                                </Col>
                            </Row>
                        </div>
                }
            </div>
        );
    }
}

export default CheckboxComp;