import React, {Component}  from 'react';
import {View } from 'react-native';

import Button from '../components/button'

class ProfileScreen extends Component {
    render() {
        return <View>
                <Button
                    title='Settings'
                    onPress={() => this.props.navigation.navigate('Settings',{})}/>
             </View>
    }
}

ProfileScreen.propTypes = {
};

export default ProfileScreen;