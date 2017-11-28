import React, {Component}  from 'react';
import {View } from 'react-native';

import Button from '../components/button'

class InfoScreen extends Component {
    render() {
        return <View>
                <Button
                    title='Settings'
                    onPress={() => this.props.navigation.navigate('Settings',{})}/>
             </View>
    }
}

InfoScreen.propTypes = {
};

export default InfoScreen;