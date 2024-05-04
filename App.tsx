import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/Navigator'


function App() {

  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
        <Navigator />
    </NavigationContainer>
    </SafeAreaView>
  )
}

export default App