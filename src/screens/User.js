import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



function User({ avatar, name, email, id, online,phone,about,followers,follow }) {
    const navigator = useNavigation()

    return (
        <View style={{
            margin: 5,
            padding: 10,
            width: Dimensions.get("screen").width - 20,
            flexDirection: "row",
            height: 100,
            alignSelf: "center",
            backgroundColor: "#7ABA78",
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 20,
        }}>
            <View >
                <Image
                    style={{ width: 80, height: 80, borderRadius: 50, margin: 10 }}
                    source={{ uri: avatar }}
                />
               {
                   online && <View style={{ position: 'absolute', backgroundColor: 'green', width: 20, height: 20, borderRadius: 50, right: 10, bottom: 5 }}></View>
               }
            </View>
            <View style={{ justifyContent: 'center', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', margin: 10, fontFamily: 'consolas', color: '#C51605' }}>{name}</Text>
                <Text style={{ fontFamily: 'consolas', fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', color: '#016A70' }}>{email}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <TouchableOpacity onPress={() => navigator.navigate("Profile", { id: id, name: name, email: email, avatar: avatar, phone:phone,about:about ,followers:followers,follow:follow})}>

                    <Icon
                        name="user-plus"
                        size={50}
                        color="black">
                    </Icon>

                </TouchableOpacity>
            </View>


        </View>
    );
}

export default User
