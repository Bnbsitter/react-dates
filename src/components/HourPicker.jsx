import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
  hidden: PropTypes.bool,
  offsetY: PropTypes.number,
  offsetX: PropTypes.number,
  elemWidth: PropTypes.number,
  hourPickerWidth: PropTypes.number,
};

const defaultProps = {
  title: "Sélectionnez l'heure",
  hidden: true,
  offsetY: 0,
  offsetX: 0,
  elemWidth: 0,
  hourPickerWidth: 350,
};

const hours = {
  1: {
    hour: '00',
    disabled: false,
    extra: false,
  },
  2: {
    hour: '01',
    disabled: false,
    extra: false,
  },
  3: {
    hour: '02',
    disabled: false,
    extra: false,
  },
  4: {
    hour: '03',
    disabled: false,
    extra: false,
  },
  5: {
    hour: '04',
    disabled: false,
    extra: false,
  },
  6: {
    hour: '05',
    disabled: false,
    extra: false,
  },
  7: {
    hour: '06',
    disabled: false,
    extra: false,
  },
  8: {
    hour: '07',
    disabled: false,
    extra: false,
  },
  9: {
    hour: '08',
    disabled: false,
    extra: false,
  },
  10: {
    hour: '09',
    disabled: false,
    extra: false,
  },
  11: {
    hour: '10',
    disabled: false,
    extra: false,
  },
  12: {
    hour: '11',
    disabled: false,
    extra: false,
  },
  13: {
    hour: '12',
    disabled: false,
    extra: false,
  },
  14: {
    hour: '13',
    disabled: false,
    extra: false,
  },
  15: {
    hour: '14',
    disabled: false,
    extra: false,
  },
  16: {
    hour: '15',
    disabled: false,
    extra: false,
  },
  17: {
    hour: '16',
    disabled: false,
    extra: false,
  },
  18: {
    hour: '17',
    disabled: false,
    extra: false,
  },
  19: {
    hour: '18',
    disabled: false,
    extra: false,
  },
  20: {
    hour: '19',
    disabled: false,
    extra: false,
  },
  21: {
    hour: '20',
    disabled: false,
    extra: false,
  },
  22: {
    hour: '21',
    disabled: false,
    extra: false,
  },
  23: {
    hour: '22',
    disabled: false,
    extra: false,
  },
  24: {
    hour: '23',
    disabled: true,
    extra: false,
  },
};

function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

function calculatePosition(offsetX, elemWidth, hourPickerWidth) {
  var fullWidth = 7 * elemWidth;
  if ((offsetX + elemWidth + hourPickerWidth) > fullWidth) {
    return ({
      left: (offsetX - (elemWidth * 2)),
      pos: 'left',
    });
  } else {
    return ({
      left: offsetX + elemWidth,
      pos: 'right',
    });
  }
}

export default class HourPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      title: props.title,
      offsetX: props.offsetX,
      offsetY: props.offsetY,
      elemWidth: props.elemWidth,
      hourPickerWidth: props.hourPickerWidth,
    };
  }

  render() {
    return (
      <div
        className="hour-picker-container"
        style={{
          position: 'absolute',
          left: calculatePosition(this.props.offsetX, this.props.elemWidth, this.props.hourPickerWidth).left,
          top: '65px',
        }}
      >
        <div className="hour-picker">
          <p className="hour-picker-title">{this.props.title}</p>
          <ul>
            {mapObject(hours, function (key, value) {
              return <li key={key} className={value.disabled ? 'hour-select-disabled' : 'hour-select'}>{value.hour}h</li>;
            })}
          </ul>
          <div
            className="hour-picker-arrow"
            style={{
              position: 'absolute',
              top: this.props.offsetY,
              left: calculatePosition(this.props.offsetX, this.props.elemWidth, this.props.hourPickerWidth).pos === 'right' ? -5 : 325,
            }}
          />
        </div>
      </div>
    );
  }
}

HourPicker.propTypes = propTypes;
HourPicker.defaultProps = defaultProps;
