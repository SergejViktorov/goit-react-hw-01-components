import React from 'react'
// import Profile from './components/Profile/Profile'
import ProfileList from './components/ProfileList/ProfileList'
import user from './user.json'

const App = () => {
	return (
		<div>
			<ProfileList prop={user} />
		</div>
	)
}

export default App
