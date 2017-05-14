import React from 'react';
import ReactDOM from 'react-dom';

export default class RuleGrid extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            rules: props.rules,
            headers: props.headers
        }
    }

    getHeaders(headers) {
        var jsx = [];
        for(var i=0; i<headers.length; i++) {
            jsx.push(<th key={i}>{headers[i]}</th>);
        }
        return jsx;
    }

    getRow(row) {

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
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td className="button-container">
                          <div className="btn-group" role="group" aria-label="Basic example">
                              <button type="button" className="btn btn-secondary">Edit</button>
                              <button type="button" className="btn btn-danger">Delete</button>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td className="button-container">
                          <div className="btn-group" role="group" aria-label="Basic example">
                              <button type="button" className="btn btn-secondary">Edit</button>
                              <button type="button" className="btn btn-danger">Delete</button>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td className="button-container">
                          <div className="btn-group" role="group" aria-label="Basic example">
                              <button type="button" className="btn btn-secondary">Edit</button>
                              <button type="button" className="btn btn-danger">Delete</button>
                          </div>
                      </td>
                    </tr>
                </tbody>
            </table>
        )
    }
};
