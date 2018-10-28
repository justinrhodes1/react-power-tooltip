import React, { Component } from 'react';
import { render } from 'react-dom';
import Prism from 'prismjs';

import Header from './Header';
import SideNav from './SideNav';
import Intro from './Content/Intro';
import BasicUse from './Content/BasicUsage/BasicUsage';
import AdvUse from './Content/AdvancedUsage';
import Examples from './Content/Examples';
import Api from './Content/Api';

// import './prism.css';
import './styles.css';

class Demo extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className='FlexContainer'>
        <Header />
        <div className='content'>
          <div className='side'>
            <SideNav />
          </div>
          <div className='main'>
            <section id={'install'}><Intro /></section>
            <section id={'basic'}><BasicUse /></section>
            <section id={'examples'}><Examples /></section>
            <section id={'advanced'}><AdvUse /></section>
            <section id={'api'}><Api /></section>
          </div>
        </div>
      </div >
    );
  }
}

render(<Demo />, document.getElementById("app"));
