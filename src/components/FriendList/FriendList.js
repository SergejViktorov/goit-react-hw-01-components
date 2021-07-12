import React from "react";
import PropTypes from "prop-types";
import "./FriendList.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className="friend-list">{items.map(FriendListItem)}</ul>;
};

FriendListItem.proType = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
