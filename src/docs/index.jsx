// import React from "react";
// import { render } from "react-dom";
// import Tooltip from "../../lib";
// import "./styles.css";

// function Demo() {
//   return (
//     <div>
//       <h1>Demo with examples of the component</h1>
//       <MyComponent color="brown">Wow what a button</MyComponent>
//     </div>
//   );
// }

import React, { Component } from 'react';
import { render } from "react-dom";
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
    let CSSLink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css" />`

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
                Color='black'
                TextboxWidth='100px'
                Animation='tpFadeDown'
                ArrowPosition='leftCenter'
                TooltipPosition='center'
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
                Color='black'
                TextboxWidth='100px'
                Animation='tpBounce'
                ArrowPosition='topCenter'
                TooltipPosition='center'
                fontSize='13px'
                textAlign='center'
                static
              >
                <span>Simple &amp; Easy!</span>
              </Tooltip>
            </span>
          </h1>
          <h2>A flexible &amp; lightweight tooltip &amp; notification library. </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '120px',
          }}>
            <a className="github-button" href="https://github.com/ntkme/github-buttons" dataSize="large" dataShowCount="true" ariaLabel="Star ntkme/github-buttons on GitHub">Star</a>
            <a className="github-button" href="https://github.com/ntkme/github-buttons/fork" dataSize="large" dataShowCount="true" ariaLabel="Fork ntkme/github-buttons on GitHub">Fork</a>
          </div>
        </div>
        <section>
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
        <div
          onMouseOver={this.showTooltip}
          onMouseLeave={this.hideTooltip}
          style={{
            marginTop: '50px',
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
            HoverBackground='#3b0586'
            HoverColor='white'
            Color='black'
            Animation='tpFadeDown'
            ArrowPosition='leftTop'
            TooltipPosition='left'
            moveRight='0px'
          // Pulse
          // moveDown='30px'
          >
            <span>Our Technology</span>
            <span>Our Story</span>
          </Tooltip>
          <Tooltip
            showTooltip={this.state.showTooltip}
            HoverBackground='#3b0586'
            HoverColor='white'
            Color='black'
            Animation='tpFadeIn'
            ArrowPosition='leftTop'
            TooltipPosition='center'
            moveRight='0px'
            lineSeparated
          // Pulse
          // moveDown='30px'
          >
            <span>Our Technology</span>
            <span>Our Story</span>
          </Tooltip>
          <Tooltip
            showTooltip={this.state.showTooltip}
            HoverBackground='#3b0586'
            HoverColor='white'
            Color='black'
            Animation='tpFade'
            ArrowPosition='leftTop'
            TooltipPosition='bottom'
            moveRight='0px'
            // Pulse
            static
          // moveDown='30px'
          >
            <span>Our Technology</span>
            <span>Our Story</span>
          </Tooltip>
          <Tooltip
            showTooltip={this.state.showTooltip}
            HoverBackground='#3b0586'
            HoverColor='white'
            Color='black'
            Animation='tpFadeUp'
            ArrowPosition='rightTop'
            TooltipPosition='center'
            moveRight='0px'
          // Pulse
          // moveDown='30px'
          >
            <span>One very long description text</span>
            <span>Our Story</span>
          </Tooltip>
          <Tooltip
            showTooltip={this.state.showTooltip}
            HoverBackground='#3b0586'
            HoverColor='white'
            Color='black'
            Animation='tpBounce'
            ArrowPosition='rightTop'
            TooltipPosition='top'
            moveRight='0px'
            lineSeparated
          // Pulse
          // moveDown='30px'
          >
            <span>One very long description text</span>
            <span>Our Story</span>
          </Tooltip>
        </div>
        <div
          style={{
            margin: '100px auto',
            padding: '0 30px',
            width: '600px',
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
                HoverBackground='#3b0586'
                HoverColor='white'
                Color='black'
                TextboxWidth='100px'
                Animation='tpFadeUpDown'
                ArrowPosition='topCenter'
                TooltipPosition='center'
                moveRight='0px'
                Pulse
                static
              // moveDown='30px'
              >
                <span>New Item added!</span>
              </Tooltip>
            </span>
            <span>Contact</span>
          </div>
        </div>

      </div >
    );
  }
}

// export default index;

render(<Demo />, document.getElementById("app"));
