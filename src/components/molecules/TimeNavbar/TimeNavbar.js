import React, { Component } from 'react';
import TimeButton from 'components/atoms/TimeButton/TimeButton';

class TimeNavbar extends Component {
  state = {
    allTime: true,
    last6: false,
    lastMonth: false,
  };

  addAnimation = (key) => {
  	this.setState({
		  allTime: false,
		  last6: false,
		  lastMonth: false,
	  });

    this.setState(prevState =>({
        [key]: !prevState[key],
    }));
  };

  render() {
    const { allTime, last6, lastMonth } = this.state;

    return (
      <div>
        <TimeButton active={allTime} animation={() => this.addAnimation('allTime')}>
          All time
        </TimeButton>
        <TimeButton active={last6} animation={() => this.addAnimation('last6')}>
          Last 6 months
        </TimeButton>
        <TimeButton active={lastMonth} animation={() => this.addAnimation('lastMonth')}>
          Last month
        </TimeButton>
      </div>
    );
  }
}

export default TimeNavbar;
