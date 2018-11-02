import React, { Component } from 'react';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';

class ShowCode extends Component {
  state = {
    open: false
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    Prism.highlightAll();
  }

  clickHandler = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;
    const { children } = this.props;
    const SVG = open ? ArrowUp : ArrowDown;
    return (
      <>
        <div
          className="toggleCode"
          role="button"
          tabIndex={0}
          onClick={this.clickHandler}
        >
          <span>{open ? 'Hide Code Example' : 'Show Code Example'}</span>
          <img
            style={{ marginLeft: '8px', width: '10px' }}
            src={SVG}
            alt=""
          />
        </div>
        {open ? children : null}
      </>
    );
  }
}

export default ShowCode;
