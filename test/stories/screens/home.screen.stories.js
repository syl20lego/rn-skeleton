import React from 'react';
import {action} from "@storybook/addon-actions/dist/index";
import {storiesOf} from "@storybook/react-native/dist/index";

import HomeScreen from '../../../src/screens/home.screen/home.screen'

storiesOf('Screens/Home Screen', module)
    .add('show loading state', () => (
        <HomeScreen
            loading={true}
            refreshing={false}
            list={[]}
            page={1}
            seed={1}
            error={null}
            fetchUser={action('fetching')}
        />
    ))
    .add('show empty state', () => (
        <HomeScreen
            loading={false}
            refreshing={false}
            list={[]}
            page={1}
            seed={1}
            error={null}
            fetchUser={action('fetching')}
        />
    ))
    .add('show refresh state', () => (
        <HomeScreen
            loading={false}
            refreshing={true}
            list={[]}
            page={1}
            seed={1}
            error={null}
            fetchUser={action('fetching')}
        />
    ))
    .add('show with items state', () => (
        <HomeScreen
            loading={false}
            refreshing={false}
            list={[{displayName:'item1', email:'email1@example.com'},{displayName:'item2', email:'email2@example.com'}]}
            page={1}
            seed={1}
            error={null}
            fetchUser={action('fetching')}
        />
    ));