import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li className="item-stat" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className="stat-list">{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ items }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <StatsList items={items} />
    </section>
  );
};

StatsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
