import React, {Component} from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import PropTypes from 'prop-types';

import * as css from '../../src/assets/styles';

export default class Button extends Component {
    render() {
        // On android label are uppercase
        const labelValue = Platform.OS === 'android' ? this.props.title.toUpperCase() : this.props.title;
        return (
            <TouchableOpacity 
                style={css.button.default}
                onPress={this.props.onPress}>
                <Text style={css.text.button}>{labelValue}</Text>
            </TouchableOpacity>
        )
    }
}

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
};