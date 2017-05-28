import React from 'react';
import ReactDOM from 'react-dom';
import Test from './js/test.jsx';

class VKLogIn extends React.Component {

    vk_redirect() {
        window.location.replace("https://www.facebook.com/dialog/oauth?client_id=313127969107763&redirect_uri=http://localhost:5000/vk_publisher/v1/verify&scope=manage_pages")
    }

    render() {
        return <button onClick={this.vk_redirect}>Facebook</button>;
    }
}

ReactDOM.render(<VKLogIn/>, document.getElementById('vk-button-container'));
