import React from "react";
import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics items={statisticalData} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
