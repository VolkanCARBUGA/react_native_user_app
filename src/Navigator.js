import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
const Stack = createStackNavigator();
const Logo = () =>{
return(
    <View style={{backgroundColor:"#03AED2" ,justifyContent:'center',alignItems:'center',margin:10,width:100,height:50, borderRadius:15,padding:10}}>

    <Text style={{color:"white",fontSize:15,fontWeight:'bold'}}>User
     App</Text>

    </View>
)
} 
function Navigator() {
  return (
    <Stack.Navigator   
      screenOptions={{headerTitleAlign:"center",headerTransparent:false}}
      
    >
      <Stack.Screen name="Home" component={Home}options={{headerTitleStyle: {color: 'black',fontSize: 20},title:"User App",headerLeft:Logo,headerStyle:{backgroundColor:"white",height:100},headerShadowVisible:false}} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
export default Navigator