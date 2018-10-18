import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Intro from './Content/Intro';
import Examples from './Content/Examples';
import Behaviour from './Content/Examples/Behaviour';
import Api from './Content/Api';
import './styles.css';

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

    return (
      <div className='FlexContainer'>
        <Header />
        <div className='content'>
          <div className='side'>
            <div className='sticky'>
              <ul>
                <li><a href='#install'>Installation</a></li>
                <li><a href='#basic'>Basic Usage</a></li>
                <li><a href='#advanced'>Advanced Usage</a></li>
                <li><a href='#examples'>Examples</a></li>
                <ul className='subUl'>
                  <li className='subList'><a href='#animations'>Animations</a></li>
                  <li className='subList'><a href='#behaviour'>Behaviour</a></li>
                  <li className='subList'><a href='#colors'>Colors / Shapes</a></li>
                  <li className='subList'><a href='#positions'>Positions</a></li>
                </ul>
                <li><a href='#api'>API</a></li>
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

render(<Demo />, document.getElementById("app"));
