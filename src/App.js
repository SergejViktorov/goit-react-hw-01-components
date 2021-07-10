import React from 'react'
import ProfileList from './components/ProfileList/ProfileList'
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'
import Statistics from './components/Statistics/Statistics'
import friends from './data/friends.json'
import FriendList from './components/FriendList/FriendList'

const App = () => {
	return (
		<>
			<ProfileList prop={user} />
			<Statistics items={statisticalData} />
			<FriendList items={friends} />
		</>
	)
}

export default App
