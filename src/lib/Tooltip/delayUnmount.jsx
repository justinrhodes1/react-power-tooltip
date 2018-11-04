import React, { Component } from 'react';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    state = {
      mount: this.props.show
    };

    componentDidUpdate(prevProps) {
      const { mount } = this.state;
      if (prevProps.show && !this.props.show && mount) {
        setTimeout(
          () => {
            if (!this.props.show) this.setState({ mount: false });
          },
          this.props.delayTime
        );
      } else if (!prevProps.show && this.props.show && !mount) {
        // eslint-disable-next-line
        this.setState({ mount: true });
      }
    }

    render() {
      return this.state.mount ? <ChildComponent {...this.props} /> : null;
    }
  }
  return ComposedComponent;
};
