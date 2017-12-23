import React from 'react';
import {storiesOf} from "@storybook/react-native/dist/index";

import SettingsScreen from '../../src/screens/settings.screen'

storiesOf('Screens/Settings Screen', module)
    .add('default', () => (
        <SettingsScreen

        />
    ));