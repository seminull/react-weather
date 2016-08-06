import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default function GoogleMaps(props) {
  return (
    <GoogleMapLoader
      containerElement={<div style={{ height: '100%' }} />}
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
      }
    />
  );
}

GoogleMaps.propTypes = {
  lat: React.PropTypes.number,
  lon: React.PropTypes.number,
};
