
import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap'
import { Dropdown } from 'semantic-ui-react'
import { postToServer } from '../../lib/comm-utils'
class Dropdown1 extends React.Component{

    render(){
      return(
          <div>
              <Form.Label className="customized-label">{this.props.displayname}</Form.Label>

               
              <Dropdown
                  placeholder='Select '
                  key={this.props.key}
                  onChange={(event,value) => {this.props.update(this.props.id, this.props.Priority, this.props.child, value.value)}}
                  search  fluid selection options={ this.props.dataotipn}
             />
          </div>
      )
    }
}
export default Dropdown1;