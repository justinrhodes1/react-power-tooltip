import React, { Component } from 'react';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        state = {
            mount: this.props.show
        };

        componentDidUpdate(prevProps) {
            let { mount } = this.state;
            if (prevProps.show && !this.props.show && mount) {
                const time = this.props.delayTime
                    ? Number(this.props.delayTime) : 400;
                setTimeout(
                    () => { if (!this.props.show) this.setState({ mount: false }) },
                    time
                );
            } else if (!prevProps.show && this.props.show && !mount) {
                this.setState({ mount: true });
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