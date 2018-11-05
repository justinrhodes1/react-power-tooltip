import React, { Component } from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line
import Prism from 'prismjs';

import Header from './Content/Header';
import SideNav from './Content/SideNav';
import Intro from './Content/Intro';
import BasicUse from './Content/BasicUse';
import AdvUse from './Content/AdvancedUse';
import Examples from './Content/Examples';
import Api from './Content/Api';

import './styles.css';

class Demo extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="flexContainer">
        <Header />
        <div className="content">
          <div className="side">
            <SideNav />
          </div>
          <div className="main">
            <section id="install"><Intro /></section>
            <section id="basic"><BasicUse /></section>
            <section id="examples"><Examples /></section>
            <section id="advanced"><AdvUse /></section>
            <section id="api"><Api /></section>
          </div>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.getElementById('app'));
