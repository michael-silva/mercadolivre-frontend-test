import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ImageContainer from './ImageContainer';


describe('ImageContainer', () => {

    it('Should render a image without src and with class "-loading" ', () => {
        const src = 'image';
        const loadImage = jest.fn();
        const wrapper = shallow(
            <ImageContainer src={src} />
        );
        
        const instance = wrapper.instance();
        instance.loadImage = loadImage;

        wrapper.update();

        const imgHtml = wrapper.html();

        expect(loadImage).not.toBeCalled();
        expect(imgHtml).toEqual('<img src="" class=" -loading"/>');
    });

    it('Should render a image with src and without class "-loading" after image finish to load', () => {
        const src = 'image';
        const loadImage = function() {
            this.setState({ loading: false });
        };
        const wrapper = shallow(
            <ImageContainer src={src} />
        );
        
        const instance = wrapper.instance();
        instance.loadImage = loadImage;
        //wrapper.setState({ loading: false });

        wrapper.update();
        instance.componentDidMount();


        const imgHtml = wrapper.html();

        expect(imgHtml).toEqual(`<img src="${src}"/>`);
    });
});