import React from 'react';
import ReactDOM from 'react-dom';
import Test from './js/test.jsx';

class HelloWorld extends React.Component {
    render() {
        return <Test/>;
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
