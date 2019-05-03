import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow'; // doesn't have to worry about lifecycle events
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});