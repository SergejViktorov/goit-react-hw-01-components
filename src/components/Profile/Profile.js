import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import Stats from "./Stats";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={avatar} alt={name} className={s.avatar} width="200" />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
    <Stats {...stats} />
  </div>
);

Profile.defaultProps = {
  atar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default Profile;
