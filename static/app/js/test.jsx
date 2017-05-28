import React from 'react';

var frequency = {
    "1": "Monthly",
    "2": "Weekly",
    "3": "Hourly"
}


class RuleGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rules: props.rules,
            headers: props.headers,
        }
    }

    getHeaders(headers) {
        var jsx = [];
        for(var i=0; i<headers.length; i++) {
            jsx.push(<th key={i}>{headers[i]}</th>);
        }
        return jsx;
    }

    getRows(rules) {
        var jsx = [];
        for(var i=0; i<rules.length; i++) {
            jsx.push(this.getRow(i, rules[i]))
        }
      return jsx;
    }

    getRow(i, row) {
        return (
            <tr key={row['_id']}>
              <th scope="row">{i + 1}</th>
              <td>{row['time']}</td>
              <td>{row['date']}</td>
              <td>{frequency[row['frequency']]}</td>
              <td className="button-container">
                  <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-secondary">Edit</button>
                      <button type="button" className="btn btn-danger">Delete</button>
                  </div>
              </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table">
                <thead className="thead-inverse">
                    <tr>
                        <th>#</th>
                        {this.getHeaders(this.state.headers)}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.getRows(this.props.rules)}
                </tbody>
            </table>
        )
    }
};


module.exports = {
  'RuleGrid': RuleGrid
}
