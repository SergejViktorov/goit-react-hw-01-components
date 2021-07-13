import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.item} key={id}>
      <span className={s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={s.list}>{items.map(FriendListItem)}</ul>;
};

FriendListItem.proType = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
