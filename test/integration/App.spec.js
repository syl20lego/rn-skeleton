import 'react-native';
import React from 'react';
import App from '../../App';
import {shallow, mount, render} from 'enzyme'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', async () => {
    const wrapper = shallow(<App />)
    await wrapper.instance().render()
});
