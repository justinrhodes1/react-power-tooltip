import React, { Component } from 'react';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        state = {
            mount: this.props.show,
            count: 1
        };

        componentDidUpdate(prevProps) {
            if (prevProps.show && !this.props.show && this.state.count === 1) {
                setTimeout(
                    () => this.setState({ mount: false, count: this.state.count + 1 }),
                    this.props.delayTime || 600
                );
            } else if (!prevProps.show && this.props.show && this.state.count === 1) {
                this.setState({ mount: true, count: this.state.count + 1 });
            }
        }

        render() {
            return this.state.mount ?
                <ChildComponent {...this.props} /> :
                null;
        }
    }
    return ComposedComponent;
}