import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-google-maps-directions'
import { useEffect } from 'react';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useRef } from 'react';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapReference = useRef(null);

  useEffect(() => {
   if (!origin || !destination) return;

    mapReference.current.fitToSuppliedMarker(["origin", "destination"], {
      edgePadding: {top: 50, right: 50, left: 50, bottom: 50},
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapReference} 
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections 
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker 
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
       {destination?.location && (
        <Marker 
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
      </MapView>
  );
};


export default Map

const styles = StyleSheet.create({})
