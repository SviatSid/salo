import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu';

import RuleGrid from './js/test.jsx';
import Modal from './js/modal.jsx';


var headers = ['test', 'test', 'test'];


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    show() {
        $('#create-rule-modal').modal('show')
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">Rules</h1>
                <button onClick={this.show} id="create-rule-button" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Create new Rule</button>
                <RuleGrid headers={headers} />
                <Modal title="Create rule" modal_id="create-rule-modal">
                    <div>Some filler</div>
                </Modal>
            </div>
        );
    }
}

class About extends React.Component {
  
  render() {
    return <div>
    <h1>About</h1>
  </div>
  }
}


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
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/rules" component={Home}/>
                        <Route path="/posts" component={About}/>
                    </div>
                </div>
            </Router>

        )
    }
}


ReactDOM.render(<BasePage/>, document.getElementById('app'));
