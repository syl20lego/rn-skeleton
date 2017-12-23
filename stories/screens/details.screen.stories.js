import React from 'react';
import {storiesOf} from "@storybook/react-native/dist/index";

import DetailsScreen from '../../src/screens/details.screen'

storiesOf('Screens/Details Screen', module)
    .add('default', () => (
        <DetailsScreen
            navigation={{
                state: {
                    params: {
                        displayName: 'story',
                        email: 'email@example.com',
                        picture: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp.jpg'
                    }
                }
            }}
        />
    ));