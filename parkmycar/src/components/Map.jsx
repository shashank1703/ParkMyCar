import React, { useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 22.7196, // Indore latitude
  lng: 75.8577  // Indore longitude
};

const Map = ({ destination }) => {
  const [directionsResponse, setDirectionsResponse] = React.useState(null);
  const originRef = useRef();

  const calculateRoute = useCallback(() => {
    if (originRef.current && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: originRef.current.getPosition(),
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [destination]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={map => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              map.setCenter(pos);
              const marker = new window.google.maps.Marker({
                position: pos,
                map: map
              });
              originRef.current = marker;
            });
          }
        }}
      >
        {destination && (
          <>
            <Marker position={destination} />
            <DirectionsService
              options={{
                destination: destination,
                origin: originRef.current ? originRef.current.getPosition() : center,
                travelMode: window.google.maps.TravelMode.DRIVING
              }}
              callback={result => {
                if (result !== null && result.status === 'OK') {
                  setDirectionsResponse(result);
                }
              }}
            />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
