import React from 'react';
import moment from 'moment';
import InputMoment from 'input-moment';


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
                <form>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="time-picker" className="col-form-label">Start time</label>
                            <div className="input-group clockpicker" data-autoclose="true">
                                <input type="text" className="form-control" defaultValue="09:30" id="time-picker"/>
                                <span className="input-group-addon">
                                    <i className="fa fa-clock-o fa-3" /><span></span>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="date-picker" className="col-form-label">Start date</label>
                            <div className="input-group datepicker-container">
                                <input type="text" className="form-control" id="date-picker" />
                                <span className="input-group-addon">
                                    <i className="fa fa-clock-o fa-3"/><span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


module.exports = {
  'CreateRuleModalContent': CreateRuleModalContent
}
