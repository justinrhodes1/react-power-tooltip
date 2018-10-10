import React, { Component } from 'react';
import { render } from "react-dom";
import Scrollchor from 'react-scrollchor';

import Tooltip from "../../lib";
import logo from '../assets/logo.svg'
import "./styles.css";

class Demo extends Component {
  state = {
    showRight: false,
    showTooltip: false,
    alternateTooltip: false,
    count: 1
  }

  showTooltip = () => {
    this.setState({ showTooltip: true })
  }

  hideTooltip = () => {
    this.setState({ showTooltip: false })
  }

  alternateTooltip = () => {
    this.setState({ alternateTooltip: !this.state.alternateTooltip })
    setTimeout(() => { this.alternateTooltip(); }, 3000);
  }

  componentDidMount() {
    setTimeout(() => { this.alternateTooltip(); }, 1000);
  }

  render() {
    let showLeft = Math.random() >= 0.5 ? true : false;
    let CSSLink = `<link rel="stylesheet" href="https://github-repo/some-github-repo" />`

    return (
      <div className='FlexContainer'>
        <div className="ribbon">
          <a href="#">Fork me on GitHub</a>
        </div>
        <div className='FlexContainer PurpleGradient Header'>
          <h1>React-custom-
            <span style={{ position: 'relative' }}>
              tooltip
              <Tooltip
                showTooltip={this.state.alternateTooltip && showLeft}
                // showTooltip={true}
                color='black'
                textboxWidth='100px'
                animation='tpFadeDown'
                arrow='leftBottom'
                tooltip='center'
                fontSize='13px'
                textAlign='center'
                static
                moveDown='5px'
                moveRight='20px'
              >
                <span>Simple &amp; Easy!</span>
              </Tooltip>
              <Tooltip
                showTooltip={this.state.alternateTooltip && !showLeft}
                color='black'
                textboxWidth='100px'
                animation='tpBounce'
                arrow='topCenter'
                tooltip='center'
                fontSize='13px'
                textAlign='center'
                static
              >
                <span>Simple &amp; Easy!</span>
              </Tooltip>
            </span>
          </h1>
          <h2>A flexible, lightweight tooltip &amp; notification library. </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '120px',
          }}>
            <a className="github-button" href="https://github.com/ntkme/github-buttons">Star</a>
            <a className="github-button" href="https://github.com/ntkme/github-buttons/fork">Fork</a>
          </div>
        </div>
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
            <section id={'install'}>
              <h1>Installation</h1>
              <h2>Npm</h2>
              <pre>
                <code>$ npm install react-custom-tooltip --save</code>
              </pre>
              <h2>CSS file</h2>
              <pre>
                <code>{CSSLink}</code>
              </pre>
            </section>
            <section id={'basic'}>
              <h1>Basic Usage</h1>
            </section>
            <section id={'advanced'}>
              <h1>Advanced Usage</h1>
            </section>
            <section id={'examples'}>
              <h1>Examples</h1>
              <h2 id='animations'>Animations</h2>
              <div className='FlexContainer'>
                <div
                  onMouseOver={this.showTooltip}
                  onMouseLeave={this.hideTooltip}
                  style={{
                    marginTop: '50px',
                    marginBottom: '50px',
                    width: '300px',
                    height: '400px',
                    background: 'linear-gradient(52deg, rgba(79,11,189,1) 0%, rgba(136,38,255,1) 100%, rgba(113,4,112,1) 100%)',
                    position: 'relative',
                    fontSize: '13px',
                    fontWeight: '400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ color: 'white', fontSize: '18px' }}>Hover me</span>
                  <Tooltip
                    showTooltip={this.state.showTooltip}
                    hoverBackground='#3b0586'
                    hoverColor='white'
                    color='black'
                    animation='tpFadeDown'
                    arrow='leftBottom'
                    tooltip='top'
                    moveRight='0px'
                  >
                    <span>Our Technology</span>
                    <span>Our Story</span>
                  </Tooltip>
                  <Tooltip
                    showTooltip={this.state.showTooltip}
                    hoverBackground='#3b0586'
                    hoverColor='white'
                    color='black'
                    animation='tpFadeIn'
                    arrow='leftBottom'
                    tooltip='center'
                    moveRight='0px'
                    lineSeparated
                  // Pulse
                  // moveDown='30px'
                  >
                    <span>trial</span>
                    <span>Our Story</span>
                  </Tooltip>
                  <Tooltip
                    showTooltip={this.state.showTooltip}
                    animation='tpFade'
                    arrow='rightBottom'
                    tooltip='bottom'
                    moveRight='0px'
                    // Pulse
                    color='white'
                    backgroundColor='#181818'
                    static
                    flat
                  // moveDown='30px'
                  >
                    <span>Our Technology</span>
                    <span>Our Story</span>
                  </Tooltip>
                  <Tooltip
                    showTooltip={this.state.showTooltip}
                    hoverBackground='#3b0586'
                    hoverColor='white'
                    color='black'
                    animation='tpFadeUp'
                    arrow='rightBottom'
                    tooltip='center'
                    moveRight='0px'
                  // Pulse
                  // moveDown='30px'
                  >
                    <span>One very long description which spans several lines and thus takes up more space. </span>
                    <span>Our Story</span>
                  </Tooltip>
                  <Tooltip
                    showTooltip={this.state.showTooltip}
                    hoverBackground='#3b0586'
                    hoverColor='white'
                    color='black'
                    animation='tpBounce'
                    arrow='rightBottom'
                    tooltip='top'
                    lineSeparated
                  >
                    <span>One very long description text</span>
                    <span>Our Story</span>
                  </Tooltip>
                </div>
                <div
                  style={{
                    margin: '100px auto',
                    padding: '0 30px',
                    width: '100%',
                    border: '1px solid lightgrey',
                    height: '65px',
                    backgroundColor: 'white',
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                  <img src={logo} style={{
                    height: '60%',
                    left: '50px'
                  }} />
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    width: '190px',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ position: 'relative' }}>Shopping Cart
                      <Tooltip
                        showTooltip={this.state.alternateTooltip}
                        hoverBackground='#3b0586'
                        hoverColor='white'
                        color='black'
                        textboxWidth='100px'
                        animation='tpFadeUpDown'
                        arrow='topLeft'
                        tooltip='center'
                        pulse
                        static
                      >
                        <span>New Item added!</span>
                      </Tooltip>
                    </span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className='button PurpleGradient'>
                  <div className='innerButton'>Click me</div>
                </div>
              </div>
              <h2 id='behaviour'>Behaviour</h2>
              <h2 id='colors'>Colors / Shapes</h2>
              <div className='flexContainer themes'>
                <div className='row'>
                  <div>
                    <p>Default Colors</p>
                    <div className='invisibleDiv'>
                      <Tooltip
                        showTooltip={true}
                        animation='tpFade'
                        arrow='leftTop'
                        tooltip='center'
                      >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                      </Tooltip>
                    </div>
                  </div>
                  <div>
                    <p>Custom Hover</p>
                    <div className='invisibleDiv'>
                      <Tooltip
                        showTooltip={true}
                        animation='tpFade'
                        arrow='leftTop'
                        tooltip='center'
                        hoverBackground='#3b0586'
                        hoverColor='white'
                      >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                      </Tooltip>
                    </div>
                  </div>
                  <div>
                    <p>Custom Background</p>
                    <div className='invisibleDiv'>
                      <Tooltip
                        showTooltip={true}
                        animation='tpFade'
                        arrow='leftTop'
                        tooltip='center'
                        color='white'
                        backgroundColor='#181818'
                      >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div>
                    <p>Text align</p>
                    <div className='invisibleDiv'>
                      <Tooltip
                        showTooltip={true}
                        animation='tpFade'
                        textAlign='right'
                        arrow='leftTop'
                        tooltip='center'
                      >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                      </Tooltip>
                    </div>
                  </div>
                  <div>
                    <p>Custom corners</p>
                    <div className='invisibleDiv'>
                      <Tooltip
                        showTooltip={true}
                        animation='tpFade'
                        borderRadius='0px'
                        arrow='leftTop'
                        tooltip='center'
                      >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                      </Tooltip>
                    </div>
                  </div>
                  <div>
                    <p>Flat (no shadows)</p>
                    <div className='invisibleDiv'>
                      <Tooltip
                        showTooltip={true}
                        animation='tpFade'
                        arrow='leftTop'
                        tooltip='center'
                        color='white'
                        backgroundColor='#444444'
                        hoverBackground='#3b0586'
                        hoverColor='white'
                        flat
                      >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <h2 id='positions'>Positions</h2>
              {/* <h2 id='themes'>Themes</h2> */}
            </section>
            <section id={'api'}>
              <h1>API Overview</h1>
              <div className='table'>
                <div className='row header'>
                  <div className='cell'>Props</div>
                  <div className='cell'>Options</div>
                  <div className='cell'>Description</div>
                </div>
                <div className='row'>
                  <div className='cell'></div>
                  <div className='cell'></div>
                  <div className='cell'></div>
                </div>
                <div className='row dark'>
                  <div className='cell'></div>
                  <div className='cell'></div>
                  <div className='cell'></div>
                </div>
                <div className='row'>
                  <div className='cell'></div>
                  <div className='cell'></div>
                  <div className='cell'></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div >
    );
  }
}

// export default index;

render(<Demo />, document.getElementById("app"));
