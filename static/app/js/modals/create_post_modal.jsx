import React from 'react';
import moment from 'moment';


class CreatePostModalContent extends React.Component {

    render() {
        return (
            <form id="create-post-form">
                <div className="form-group">
                    <label htmlFor="post-name">Post name</label>
                    <input type="text" className="form-control" id="post-name" name="name" placeholder="Type name of post here" />
                </div>
                <div className="form-group">
                    <label htmlFor="post-content">Post content</label>
                    <textarea className="form-control" id="post-content" name="content" rows="4" placeholder="Type contetnt of post here"></textarea>
                </div>
            </form>
        )
    }
}


module.exports = {
  'CreatePostModalContent': CreatePostModalContent
}
