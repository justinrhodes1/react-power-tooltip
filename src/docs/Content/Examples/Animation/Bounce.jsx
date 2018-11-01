import React, { Component } from 'react';
import Tooltip from '../../../../lib';

class Animations2 extends Component {
  state = {
    show: false
  }

  showTooltip = (bool) => {
    this.setState({ show: bool });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.showTooltip(true)}
        onMouseLeave={() => this.showTooltip(false)}
        className="hoverDiv"
      >
        <span style={{ marginBottom: '15px' }}>Hover Me</span>
        <span style={{ fontSize: '14px' }}><strong>Bounce</strong></span>
        <Tooltip
          show={this.state.show}
          animation="bounce"
          arrow="center"
          position="bottom center"
          color="black"
          fontSize="14px"
        >
          <span>Our Technology</span>
          <span>Our Story</span>
        </Tooltip>
      </div>
    );
  }
}

export default Animations2;
