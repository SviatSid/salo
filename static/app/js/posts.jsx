import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import {Modal} from './modals/base_modal.jsx';
import {CreatePostModalContent} from './modals/create_post_modal.jsx';

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

    getRows(posts) {
        var jsx = [];
        for(var i=0; i<posts.length; i++) {
            jsx.push(this.getRow(i, posts[i]))
        }
      return jsx;
    }

    getRow(i, row) {
        return (
            <tr key={row['_id']}>
              <th scope="row">{i + 1}</th>
              <td>{row['name']}</td>
              <td>{row['content']}</td>
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
                    {this.getRows(this.props.posts)}
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

    componentDidMount() {
        self = this
        $.get("/vk_publisher/v1/posts",
            function(posts, status) {
                if (status == 'success') {
                    this.setState({'posts': posts});
                }
            }.bind(this));
    }

    show() {
        $('#create-post-modal').modal('show');
    }

    createPost() {
        var data = {};
        var form = $('#create-post-form :input');
        form.each(function() {
            data[this.name] = $(this).val();
        });
        console.log(data);
        $.post("/vk_publisher/v1/posts",
                data,
                function(response, status) {
                    console.log(response);
            });
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">Posts</h1>
                <Button bsStyle="primary" id="create-post-button" onClick={this.show}>Create new Post</Button>
                <PostGrid headers={headers} posts={this.state.posts}/>

                <Modal title="Create Post" modal_id="create-post-modal" handler={this.createPost}>
                    <CreatePostModalContent />
                </Modal>
            </div>
        )
    }
}
