import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={s.list}>{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ items }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
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
