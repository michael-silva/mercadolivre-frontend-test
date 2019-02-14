import React, { PureComponent } from "react";

export class ImageContainer extends PureComponent {
  constructor() {
      super();
      this.state = { loading: true };
  }
  
  componentDidMount() {
    this.mounted = true;
    this.loadImage();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.src !== this.props.src) {
        this.loadImage();
    }
  }

  loadImage() {
    this.setState({ loading: true });
    const img = new Image();
    img.src = this.props.src;
    img.onload = (e) => {
      if (this.mounted) {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { loading } = this.state;
    const imgProps = {...this.props};
    if (loading) {
        imgProps.src = '';
        imgProps.className += ' -loading';
    }
    // eslint-disable-next-line
    return <img {...imgProps} />;
  }
}

export default ImageContainer;

