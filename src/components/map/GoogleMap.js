import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // 设置地图中心位置为上海市中心（你可以根据实际办公室位置调整这些坐标）
  const center = useMemo(() => ({ lat: 31.2304, lng: 121.4737 }), []);

  const mapOptions = {
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
  };

  if (!isLoaded) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={15}
      center={center}
      mapContainerClassName="w-full h-full rounded-lg"
    >
      <MarkerF position={center} title="IZ Planning and Architecture" />
    </GoogleMap>
  );
};

export default MapComponent;
