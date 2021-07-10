import React from 'react'
import ProfileList from './components/ProfileList/ProfileList'
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'
import Statistics from './components/Statistics/Statistics'
import friends from './data/friends.json'
import FriendList from './components/FriendList/FriendList'
import transactions from './data/transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

const App = () => {
	return (
		<>
			<ProfileList prop={user} />
			<Statistics items={statisticalData} />
			<FriendList items={friends} />
			<TransactionHistory items={transactions} />
		</>
	)
}

export default App
