import React from 'react'
import Profile from '../Profile/Profile'
// import PropTypes from 'prop-types'

const ProfileList = ({ prop }) => (
	<Profile
		name={prop.name}
		tag={prop.tag}
		location={prop.location}
		avatar={prop.avatar}
		stats={prop.stats}
	/>
)

export default ProfileList
