import React from 'react'
const TransactionItem = ({ id, type, amount, currency }) => {
	return (
		<tr key={id}>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	)
}
const TransactionList = ({ items }) => {
	if (items.length === 0) return null
	return <tbody>{items.map(TransactionItem)}</tbody>
}

const TransactionHistory = ({ items }) => {
	return (
		<table class="transaction-history">
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<TransactionList items={items} />
		</table>
	)
}

export default TransactionHistory
