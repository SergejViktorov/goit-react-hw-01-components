import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={s.tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionList = ({ items }) => {
  if (items.length === 0) return null;
  return <tbody className={s.tbody}>{items.map(TransactionItem)}</tbody>;
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionList items={items} />
    </table>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
