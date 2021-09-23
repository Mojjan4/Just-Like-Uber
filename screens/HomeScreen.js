import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from './components/NavOptions';

const HomeScreen = (navigation) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}> 
      <View style={tw`p-2`}>
        <Image 
          style={{
            width: 100, 
            height: 100, 
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          />
          
          <NavOptions />
      </View>
    </SafeAreaView>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
})
