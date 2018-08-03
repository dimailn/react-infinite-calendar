import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import styles from './Weekdays.scss';

let scrollbarSize = null;

export default class Weekdays extends PureComponent {
  static propTypes = {
    locale: PropTypes.object,
    theme: PropTypes.object,
  };

  componentDidMount(){
    if(!scrollbarSize)
      scrollbarSize = getScrollbarSize()
  }

  render() {
    const {weekdays, weekStartsOn, theme} = this.props;
    const orderedWeekdays = [...weekdays.slice(weekStartsOn, 7), ...weekdays.slice(0, weekStartsOn)];

    return (
      <ul
        className={styles.root}
        style={{
          backgroundColor: theme.weekdayColor,
          color: theme.textColor.active,
          paddingRight: scrollbarSize,
        }}
        aria-hidden={true}
      >
        {orderedWeekdays.map((val, index) => (
          <li key={`Weekday-${index}`} className={styles.day}>{val}</li>
        ))}
      </ul>
    );
  }
}
