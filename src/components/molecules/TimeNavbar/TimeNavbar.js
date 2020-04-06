import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeButton from 'components/atoms/TimeButton/TimeButton';

class TimeNavbar extends Component {
  state = {
    long_term: true,
    medium_term: false,
    short_term: false,
  };

  setActive = (key) => {
    if (!this.state[key]) {
      this.setState({
        long_term: false,
        medium_term: false,
        short_term: false,
        [key]: true,
      });

      setTimeout(()=>{
        const { update } = this.props;
        Object.keys(this.state).forEach((item) => {
          if (this.state[item]) {
            update(item);
          }
        });
      },50);
    }
  };

  render() {
    const { long_term, medium_term, short_term } = this.state;

    return (
      <div>
        <TimeButton active={long_term} animation={() => this.setActive('long_term')}>
          All time
        </TimeButton>
        <TimeButton active={medium_term} animation={() => this.setActive('medium_term')}>
          Last 6 months
        </TimeButton>
        <TimeButton active={short_term} animation={() => this.setActive('short_term')}>
          Last month
        </TimeButton>
      </div>
    );
  }
}

export default TimeNavbar;

TimeNavbar.propTypes = {
  update: PropTypes.func.isRequired,
};
