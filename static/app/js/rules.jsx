import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import {RuleGrid} from './test.jsx';
import {Modal} from './modals/base_modal.jsx';
import {CreateRuleModalContent} from './modals/create_rule_modal.jsx';


var headers = ['test', 'test', 'test'];


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
        $('.datepicker-container input').datepicker({});
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
                    <CreateRuleModalContent/>
                </Modal>
            </div>
        );
    }
}
