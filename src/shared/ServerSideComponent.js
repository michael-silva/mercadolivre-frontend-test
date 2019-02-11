import { Component } from 'react';

export const componentsToRender = [];

class ServerSideComponent extends Component {
    constructor() {
        super();
        componentsToRender.push(this);
    }

    fetchInitialData() {
        return Promise.resolve();
    };
}

export default ServerSideComponent;