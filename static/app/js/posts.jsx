import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import {Modal} from './modals/base_modal.jsx';

var headers = ['Name', 'Content']


class PostGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
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
                </tbody>
            </table>
        )
    }
}


export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    show() {
        $('#create-post-modal').modal('show');
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">Posts</h1>
                <Button bsStyle="primary" id="create-post-button" onClick={this.show}>Create new Post</Button>
                <PostGrid headers={headers}/>

                <Modal title="Create Post" modal_id="create-post-modal" handler={this.createRule}>
                    <div>test</div>
                </Modal>
            </div>
        )
    }
}
