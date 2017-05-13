import React from 'react';
import ReactDOM from 'react-dom';
import { elastic as Menu } from 'react-burger-menu';

import Test from './js/test.jsx';


class MenuIcon extends React.Component {

    render() {
        return (
            <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
            </Menu>
        )
    }
}

class BasePage extends React.Component {
    render() {
        return (
            <div id="outer-container" style={{height: '100%'}}>
                <MenuIcon/>
                <div id="page-wrap">
                    <h1>Some text</h1>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<BasePage/>, document.getElementById('app'));
