import React, { Component } from 'react';
import classNames from 'classnames';
import Link from '../Link';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import {
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem,
//   ProgressBar,
// } from 'react-bootstrap';
// import Link from '../Link';
// import s from './Header.css';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import $ from "jquery";
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href="#"
                onClick={() => {
                  this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })
              }
              >
                <li>
                  <Link to="dashboard.flot-charts">Flot Charts</Link>
                </li>
                <li>
                  <Link to="dashboard.morrisjs-charts">Morris.js Charts</Link>
                </li>
              </ul>
            </li>


            <li>
              <a href="" onClick={(e) => { event.preventDefault(); history.push('/table'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Tables
              </a>
            </li>

            <li>
              <Link to="dashboard.forms"><i className="fa fa-edit fa-fw" /> Forms</Link>
            </li>

            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a href="#" onClick={ () => { this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed}); return false; } }><i className="fa fa-edit fa-fw" /> UI Elements<span className="fa arrow"></span></a>

              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
                <li>
                  <Link to="dashboard.panels-wells">Panels and Wells</Link>
                </li>
                <li>
                  <Link to="dashboard.buttons">Buttons</Link>
                </li>
                <li>
                  <Link to="dashboard.notifications">Notifications</Link>
                </li>
                <li>
                  <Link to="dashboard.typography">Typography</Link>
                </li>
                <li>
                  <Link to="dashboard.icons"> Icons</Link>
                </li>
                <li>
                  <Link to="dashboard.grid">Grid</Link>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.multiLevelDropdownCollapsed})}>
              <a href="#" onClick={ (e) => { e.preventDefault(); his.setState({multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed }); return false; } }>
                <i className="fa fa-sitemap fa-fw" />&nbsp;Multi-Level Dropdown<span className="fa arrow"></span>
              </a>
              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.multiLevelDropdownCollapsed})}>
                <li>
                  <a href="javascript:void(0)">Second Level Item</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Second Level Item</a>
                </li>
                <li className={classNames({ active: !this.state.thirdLevelDropdownCollapsed })}>
                  <a href="javascript:void(0)" onClick={ () => { this.setState({thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed }); return false; } }>
                    Third Level<span className="fa arrow"></span>
                  </a>
                  <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.thirdLevelDropdownCollapsed })}>
                    <li>
                      <a href="javascript:void(0)">Third Level Item</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Third Level Item</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Third Level Item</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a href="#" onClick={ () => { this.setState({samplePagesCollapsed: !this.state.samplePagesCollapsed }); return false; } }>
                <i className="fa fa-files-o fa-fw" />&nbsp;Sample Pages<span className="fa arrow"></span>
              </a>
              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.samplePagesCollapsed })}>
                <li>
                  <Link to="dashboard.blank">Blank Page</Link>
                </li>
                <li>
                  <Link to="login">Login Page</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="http://www.strapui.com/">Premium React Themes</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;