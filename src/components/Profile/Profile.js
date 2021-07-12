import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import Stats from "./Stats";
import "./Profile.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={name} className="avatar-profile" width="200" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
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
