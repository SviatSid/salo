import React from 'react';
import ReactDOM from 'react-dom';
import Test from './js/test.jsx';

class VKLogIn extends React.Component {

    vk_redirect() {
        window.location.replace("https://oauth.vk.com/authorize?client_id=6018129&redirect_uri=http://localhost:5000/vk_publisher/v1/verify&display=page&scope=73728");
    }

    render() {
        return <button onClick={this.vk_redirect}>VK</button>;
    }
}

ReactDOM.render(<VKLogIn/>, document.getElementById('root'));
