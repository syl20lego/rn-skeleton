import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

export default function CenterView(props) {
  return <View style={styles.main}>{props.children}</View>;
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
