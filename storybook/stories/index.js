import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';

import Button from '../../src/components/button';
import HomeScreen from '../../src/screens/home.screen/home.screen'
import DetailsScreen from '../../src/screens/details.screen'
import InfoScreen from '../../src/screens/info.screen'
import SettingsScreen from '../../src/screens/settings.screen'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Components/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button
        title='stories'
        onPress={action('clicked-text')}>
    </Button>
  ));

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
            list={[{displayName:'item1', email:'email1@example.com'}]}
            page={1}
            seed={1}
            error={null}
            fetchUser={action('fetching')}
        />
    ));

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

storiesOf('Screens/Info Screen', module)
    .add('show settings button', () => (
        <InfoScreen
            navigation={{navigate: action('navigate')}}
        />
    ));

storiesOf('Screens/Settings Screen', module)
    .add('default', () => (
        <SettingsScreen

        />
    ));