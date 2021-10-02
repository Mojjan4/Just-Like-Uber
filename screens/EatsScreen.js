import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const EatsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2`}>
        <Text>Eatstuff here</Text>
      </View>
    </SafeAreaView>
  )
}

export default EatsScreen

const styles = StyleSheet.create({})
