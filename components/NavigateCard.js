import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/core'
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigaion = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`border-t py-5 border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
                })
              );
                navigaion.navigate("RideOptionsCard")
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_API_KEY,
              language: "en"
            }}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
          />
        </View>
          <NavFavourites/>
      </View>

      <View>
            
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
