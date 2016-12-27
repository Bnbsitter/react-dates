import React from 'react';
import moment from 'moment';
import { storiesOf } from '@kadira/storybook';
import DayPicker from '../src/components/DayPicker';

import { VERTICAL_ORIENTATION } from '../constants';

const TestPrevIcon = props => (
  <span style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    Prev
  </span>
);
const TestNextIcon = props => (
  <span style={{
    border: '1px solid #dce0e0',
    backgroundColor: '#fff',
    color: '#484848',
    padding: '3px'
    }}
  >
    Next
  </span>
);

storiesOf('DayPicker', module)
  .addWithInfo('default', () => (
    <DayPicker />
  ))
  .addWithInfo('more than one month', () => (
    <DayPicker numberOfMonths={2} />
  ))
  .addWithInfo('vertical', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
    />
  ))
  .addWithInfo('with custom arrows', () => (
    <DayPicker
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  ))
  .addWithInfo('vertical with fixed-width container', () => (
    <div style={{ width: '400px' }}>
      <DayPicker
        numberOfMonths={2}
        orientation={VERTICAL_ORIENTATION}
      />
    </div>
  ))
  .addWithInfo('week format', () => (
    <DayPicker
      weekFormat="ddd"
    />
  ))
  .addWithInfo('with modifiers', () => (
    <DayPicker
      modifiers={{
        past: (day) => day.isBefore(moment()),
        sixmonths: (day) => day.isAfter(moment().add(7, 'M')),
        lastMinute24: (day) => day.isBetween(moment(), moment().add(2, 'days')),
        lastMinute48: (day) => day.isBetween(moment().add(2, 'days'), moment().add(4, 'days')),
      }}
    />
  ))
  .addWithInfo('with modifiersComponents', () => (
    <DayPicker
      modifiersComponents={{
        '2016-12-27': <span className="day--lastminute">Last minute</span>,
        '2016-12-28': <span className="day--lastminute">Last minute</span>,
        '2016-12-29': <span className="day--lastminute">Last minute</span>,
      }}
    />
  ))
  .addWithInfo('with modifiers & modifiersComponents', () => (
    <DayPicker
      modifiers={{
        past: (day) => day.isBefore(moment()),
        sixmonths: (day) => day.isAfter(moment().add(7, 'M')),
        lastMinute24: (day) => day.isBetween(moment(), moment().add(2, 'days')),
        lastMinute48: (day) => day.isBetween(moment().add(2, 'days'), moment().add(4, 'days')),
      }}
      modifiersComponents={{
        '2016-12-27':
          <div className="day--lastminute">
            <p className="day--lastminute-label">Last minute</p>
            <p className="day--lastminute-price">10€</p>
          </div>,
        '2016-12-28':
          <div className="day--lastminute">
            <p className="day--lastminute-label">Last minute</p>
            <p className="day--lastminute-price">10€</p>
          </div>,
        '2016-12-29':
          <div className="day--lastminute">
            <p className="day--lastminute-label">Last minute</p>
            <p className="day--lastminute-price">10€</p>
          </div>,
      }}
    />
  ));