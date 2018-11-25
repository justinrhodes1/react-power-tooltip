import React, { Component } from 'react';
import Tooltip from '../../../../lib';
import logo from '../../../../assets/logo.svg';

class Alert extends Component {
  state = {
    alternate: true
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({ alternate: !prevState.alternate }));
    }, 5000);
  }

  render() {
    return (
      <>
        <h3 style={{ margin: '25px 0 0 0' }}>Static alert example</h3>
        <div
          style={{
            margin: '5px auto 30px auto',
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
          }}
        >
          <img
            src={logo}
            style={{
              height: '60%',
              left: '50px'
            }}
            alt=""
          />
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            width: '190px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
            <span style={{ position: 'relative' }}>
              Shopping Cart
              <Tooltip
                show={this.state.alternate}
                hoverBackground="#3b0586"
                hoverColor="white"
                textboxWidth="100px"
                animation="bounce"
                arrowAlign="start"
                position="bottom center"
                alert="rgb(51,22,236)"
                static
              >
                <span>New Item added!</span>
              </Tooltip>
            </span>
            <span>Contact</span>
          </div>
        </div>
      </>
    );
  }
}

export default Alert;
