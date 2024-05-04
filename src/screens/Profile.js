import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Data from '../Data'

function Profile({route}) {
    const [user, setUser] = useState({})
    useEffect(() => {
       (async () => {
           const id=route.params.id
           const user = await Data.filter((item) => item.id === id)[0];
           setUser(user);
       })();
    },[])
const data=route.params
    console.log(route.params.name)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <Image source={{ uri: data.avatar }} style={{ width: 200, height: 200, borderRadius: 500 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', margin: 10, fontFamily: 'consolas', color: data.online ? '#00FF00' : '#FF0000' }}>{data.online ? "Online" : "Offline"}</Text>
     <View style={{ alignItems: 'center', justifyContent: 'space-evenly' ,flexDirection:'row'}}>
     <Text style={{ fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', margin: 10, fontFamily: 'consolas', color: '#0A6847' }}>{data.followers} {"Takipçi"}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', margin: 10, fontFamily: 'consolas', color: '#FC4100' }}>{data.follow} {"Takip"}</Text>
     </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', margin: 10, fontFamily: 'consolas', color: '#C51605',padding:10 }}>{data.name}</Text>
                <Text style={{ fontFamily: 'consolas', fontSize: 17, fontStyle: 'italic', fontWeight: 'bold', color: '#016A70' ,padding:10}}>{data.email}</Text>
                <Text style={{ fontFamily: 'consolas', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold', color: '#1D5D9B',padding:10  }}>{data.about}</Text>
                <Text style={{ fontFamily: 'consolas', fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', color: data.online ? '#00FF00' : '#FF0000' }}>{data.phone}</Text>
            </View>
        </View>
    );
    
    
    
    
}
export default Profile
