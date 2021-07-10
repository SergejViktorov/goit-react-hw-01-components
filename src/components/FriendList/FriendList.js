import React from 'react'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
	return (
		<li class="item" key={id}>
			<span class="status">{isOnline}</span>
			<img class="avatar" src={avatar} alt={name} width="48" />
			<p class="name">{name}</p>
		</li>
	)
}

const FriendList = ({ items }) => {
	if (items.length === 0) return null
	return <ul class="friend-list">{items.map(FriendListItem)}</ul>
}

export default FriendList
