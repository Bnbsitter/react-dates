import { storiesOf } from '@kadira/storybook';
import React from 'react';
import moment from 'moment';
import HourPicker from '../src/components/HourPicker';

storiesOf('HourPicker', module)
  .addWithInfo('default', () => (
    <HourPicker />
  ));
