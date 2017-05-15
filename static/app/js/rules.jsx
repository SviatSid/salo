import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import {RuleGrid} from './test.jsx';
import {Modal} from './modals/base_modal.jsx';


var headers = ['test', 'test', 'test'];

function FieldGroup({ id, lable, help }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{lable}</ControlLabel>
      <FormControl/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


export default class Rules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    show() {
        $('.clockpicker').clockpicker();
        $('#create-rule-modal').modal('show');
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">Rules</h1>
                <Button bsStyle="primary" id="create-rule-button" onClick={this.show}>Create new Rule</Button>
                <RuleGrid headers={headers} />

                <Modal title="Create rule" modal_id="create-rule-modal">
                    <form>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            lable="Start day"
                            placeholder="Enter text"
                        />
                        <div className="input-group clockpicker">
                            <input type="text" className="form-control" defaultValue="09:30"/>
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-time"></span>
                            </span>
                        </div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </form>
                </Modal>
            </div>
        );
    }
}
