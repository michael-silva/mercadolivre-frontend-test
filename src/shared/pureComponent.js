import React, { PureComponent } from 'react';

export default (Component) => class extends PureComponent {
        render() {
            return <Component {...this.props} />
        }
    };