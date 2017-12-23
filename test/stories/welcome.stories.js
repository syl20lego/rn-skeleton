import React from 'react';
import {linkTo} from "@storybook/addon-links/dist/index";
import {storiesOf} from "@storybook/react-native/dist/index";

import Welcome from './helpers/welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
