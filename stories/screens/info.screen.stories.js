import React from 'react';
import {action} from "@storybook/addon-actions/dist/index";
import {storiesOf} from "@storybook/react-native/dist/index";

import InfoScreen from '../../src/screens/info.screen'

storiesOf('Screens/Info Screen', module)
    .add('show settings button', () => (
        <InfoScreen
            navigation={{navigate: action('navigate')}}
        />
    ));