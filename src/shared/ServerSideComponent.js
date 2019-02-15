import { Component } from 'react';

export const componentsToRender = [];

class ServerSideComponent extends Component {
  constructor() {
    super();
    if (new.target === ServerSideComponent) {
      throw new TypeError('Cannot construct ServerSideComponent instances directly');
    }
    componentsToRender.push(this);
  }

  fetchInitialData() {
    return Promise.resolve();
  };
}

export default ServerSideComponent;
