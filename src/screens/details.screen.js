import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Card} from "react-native-elements";

import * as css from '../assets/styles';

class DetailsScreen extends Component {
    render() {
        const {params} = this.props.navigation.state;
        return <View style={[css.containers.screen, css.containers.default]}>
            <Card style={styles.card}
                title={`${params.firstName} ${params.lastName}`}
                image={{uri: params.picture}}>
                <Text style={styles.email}>
                    {params.email}
                </Text>
            </Card>
        </View>;
    }
}

const styles = StyleSheet.create({
    card: {
    },
    email: {
        marginBottom: 10
    }
});

DetailsScreen.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                firstName: PropTypes.string.isRequired,
                lastName: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                picture: PropTypes.string
            })
        })
    })
};

export default DetailsScreen;