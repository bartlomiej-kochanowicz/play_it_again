import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TimeButton from 'components/atoms/TimeButton/TimeButton';
import { time } from 'utils';

const TimeNavbar = ({ update }) => {
  const [activeTab, setActiveTab] = useState(time.longTerm);

  useEffect(() => {
    setActiveTab(time.longTerm);
  }, []);

  const handleChange = (option) => {
    setActiveTab(option);
    update(option);
  };

  return (
    <div>
      <TimeButton
        active={activeTab === time.longTerm}
        animation={() => handleChange(time.longTerm)}
      >
        All time
      </TimeButton>
      <TimeButton
        active={activeTab === time.mediumTerm}
        animation={() => handleChange(time.mediumTerm)}
      >
        Last 6 months
      </TimeButton>
      <TimeButton
        active={activeTab === time.shortTerm}
        animation={() => handleChange(time.shortTerm)}
      >
        Last month
      </TimeButton>
    </div>
  );
};

export default TimeNavbar;

TimeNavbar.propTypes = {
  update: PropTypes.func.isRequired,
};
