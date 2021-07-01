import user from './Profile/user.json';
import Profile from './Profile/Profile';

import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={'Upload stats'} stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
