import React from 'react';
import { View } from 'react-native';
import User from './User';
import { FlatList } from 'react-native-gesture-handler';
import { data } from '../Data';

export default function UserList() {
    return (
        <View >
            <FlatList
           
                data={data}
                renderItem={({ item }) => <User avatar={item.avatar} name={item.name} email={item.email}id={item.id} online={item.online}phone={item.phone}about={item.about}follow={item.follow} followers={item.followers}/>}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    );
}
