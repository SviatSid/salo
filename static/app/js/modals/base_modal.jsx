import React from 'react';
import ReactDOM from 'react-dom';


export default class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" id={this.props.modal_id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {this.props.children}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.props.handler}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}


module.exports = {
  'Modal': Modal
}
