import React from 'react';
import moment from 'moment';


class FrequencyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        }
    }

    getLayout(type) {
        var jsx = (<div></div>);
        if (type == '2') {
            jsx = (
                <div className="form-group row">
                    <div className="col-md-12">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="0" name="day"/> Mo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="1" name="day"/> TU
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="2" name="day"/> WE
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="3" name="day"/> TH
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="4" name="day"/> FR
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="5" name="day"/> ST
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="6" name="day"/> SU
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        return jsx;
    }

    render() {
        var jsx = this.getLayout(this.props.type)
        return jsx;
    }
}


class FrequencySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '1'
        }

        this.change = this.change.bind(this);
    }

    change(event) {
         this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="frequency" className="col-form-label">Frequency:</label>
                        <select className="form-control"
                                id="frequency"
                                name="frequency"
                                onChange={this.change}
                                value={this.state.value}>
                            <option value="1">MONSLY</option>
                            <option value="2">WEEKLY</option>
                            <option value="3">HOURLY</option>
                        </select>
                    </div>
                </div>
                <FrequencyData type={this.state.value} />
            </div>
        );
    }
}


class CreateRuleModalContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="container">
                <form id="create-rule-form">
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="time-picker" className="col-form-label">Start time</label>
                            <div className="input-group clockpicker" data-autoclose="true">
                                <input type="text" 
                                       className="form-control" 
                                       defaultValue={moment().format('HH:mm')} 
                                       id="time-picker"
                                       name="time_picker"/>
                                <span className="input-group-addon">
                                    <i className="fa fa-clock-o fa-3" /><span></span>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="date-picker" className="col-form-label">Start date</label>
                            <div className="input-group datepicker-container">
                                <input type="text" 
                                       className="form-control" 
                                       id="date-picker"
                                       name="date_picker" />
                                <span className="input-group-addon">
                                    <i className="fa fa-clock-o fa-3"/><span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <FrequencySelect/>
                </form>
            </div>
        );
    }
}


module.exports = {
  'CreateRuleModalContent': CreateRuleModalContent
}
