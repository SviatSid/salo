import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu';

import Rules from './js/rules.jsx';
import Posts from './js/posts.jsx';


class MenuIcon extends React.Component {

    render() {
        return (
            <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
                <Link to="/"><h2 key="0"><i className="fa fa-fw fa-vk fa-2x" /><span>Publisher</span></h2></Link>
                <Link to="/rules"><a key="1" href=""><i className="fa fa-fw fa-calendar" /><span>Rules</span></a></Link>
                <Link to="/posts"><a key="2" href=""><i className="fa fa-fw fa-clone " /><span>Posts</span></a></Link>
            </Menu>
        )
    }
}

class App extends React.Component {
    render() {
        <div>
            <h1>App</h1>
            <ul>
              <li><Link to="/about">About</Link></li>
            </ul>

        </div>
    }
}


class BasePage extends React.Component {
    render() {
        return (
            <Router>
                <div id="outer-container" style={{height: '100%'}}>
                    <MenuIcon/>
                    <div id="page-wrap">
                        <Route exact path="/" component={Rules}/>
                        <Route exact path="/rules" component={Rules}/>
                        <Route path="/posts" component={Posts}/>
                    </div>

                </div>
            </Router>
        )
    }
}


ReactDOM.render(<BasePage/>, document.getElementById('app'));
