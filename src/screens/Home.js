import React from 'react';
import { View, Text } from 'react-native';
import UserList from './UserList';
function Home() {
    return (
        <View style={{ flex: 1, justifyContent:"center", backgroundColor: 'white', }}>
          <UserList />
        </View>
    );
}
export default Home