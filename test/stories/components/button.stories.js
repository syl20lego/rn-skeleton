import React from 'react';
import {action} from "@storybook/addon-actions/dist/index";
import {storiesOf} from "@storybook/react-native/dist/index";
import CenterView from '../helpers/centerview';

import Button from '../../../src/components/button';


storiesOf('Components/Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('with text', () => (
        <Button
            title='stories'
            onPress={action('clicked-text')}>
        </Button>
    ));
