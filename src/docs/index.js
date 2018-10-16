import React, { Component } from 'react';
import { render } from "react-dom";
import Scrollchor from 'react-scrollchor';
// import '../assets/favicon.ico';

import Header from "./header/header";
import Intro from './section1/section1';
import Examples from './section2/section2';
import Behaviour from './section3/section3';
import Api from './section4/section4';
import "./styles.css";

class Demo extends Component {
  // state = {
  //   showTooltip: true
  // }

  // showTooltip = () => {
  //   this.setState({ showTooltip: true })
  // }

  // hideTooltip = () => {
  //   this.setState({ showTooltip: true })
  // }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       alternate: !this.state.alternate,
  //     });
  //   }, 2000);
  // }


  render() {
    // const { alternate } = this.state;
    // const showLeft = Math.random() >= 0.5 ? true : false;

    // const CSSLink = `<link rel="stylesheet" href="https://github-repo/some-github-repo" />`

    return (
      <div className='FlexContainer'>
        <Header />
        <div className='content'>
          <div className='side'>
            <div className='sticky'>
              <ul>
                <li><Scrollchor to="#install">Installation</Scrollchor></li>
                <li><Scrollchor to="#basic">Basic Usage</Scrollchor></li>
                <li><Scrollchor to="#advanced">Advanced Usage</Scrollchor></li>
                <li><Scrollchor to="#examples">Examples</Scrollchor></li>
                <ul className='subUl'>
                  <li className='subList'><Scrollchor to="#animations">Animations</Scrollchor></li>
                  <li className='subList'><Scrollchor to="#behaviour">Behaviour</Scrollchor></li>
                  <li className='subList'><Scrollchor to="#colors">Colors / Shapes</Scrollchor></li>
                  <li className='subList'><Scrollchor to="#positions">Positions</Scrollchor></li>
                </ul>
                <li><Scrollchor to="#api">API</Scrollchor></li>
              </ul>
            </div>
          </div>
          <div className='main'>
            <section id={'install'}><Intro /></section>
            <section id={'basic'}><h1>Basic Usage</h1></section>
            <section id={'advanced'}><h1>Advanced Usage</h1></section>
            <section id={'examples'}><Examples /></section>
            <section id={'behaviour'}><Behaviour /></section>
            <section id='positions'><h2>Positions</h2></section>
            <section id={'api'}><Api /></section>
          </div>
        </div>
      </div >
    );
  }
}

// export default index;

render(<Demo />, document.getElementById("app"));
