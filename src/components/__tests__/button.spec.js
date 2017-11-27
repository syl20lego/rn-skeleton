import React from 'react';
import {Platform} from 'react-native';
import {shallow} from 'enzyme';

import Button from '../button';

describe('Testing button component', () => {

    const onPress = jest.fn();
    const createTestProps = (props) => {
        return {
            onPress,
            ...props,
        }
    };
    const createWrapper = props => shallow(<Button {...props} />);

    let wrapper;
    describe('rendering', () => {
        beforeEach(() => {
            props  = createTestProps({ title: 'test'});
            wrapper = createWrapper(props)
        });
        it('Must be TouchableOpacity', () => {
            expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
        });
    });
    describe('android', () => {
        beforeEach(() => {
            Platform.OS = 'android';
            props  = createTestProps({ title: 'test'});
            wrapper = createWrapper(props)
        });
        it('Label should be uppercase in Android', () => {
            let label = wrapper.find('Text');
            expect(label.dive().contains('TEST')).toBe(true);
        });
    });
    describe('iOS', () => {
        beforeEach(() => {
            Platform.OS = 'ios';
            props  = createTestProps({ title: 'test'});
            wrapper = createWrapper(props)
        });
        it('Label should be as is in iOS', () => {
            let label = wrapper.find('Text');
            expect(label.dive().contains('test')).toBe(true);
        });
    });
    describe('callbacks', () => {
        beforeEach(() => {
            props  = createTestProps({ title: 'test'});
            wrapper = createWrapper(props)
        });
        it('onPress should be call', () => {
            wrapper.find('TouchableOpacity').prop('onPress')();
            expect(onPress).toHaveBeenCalledTimes(1);
        })
    });
});