"use client";

import { MapProps } from "@/globalTypes.d";
import MapboxMap, { MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Marker } from "react-map-gl";
import { useRef } from "react";

export const Map = ({ lng, lat, zoom }: MapProps) => {
  const mapRef = useRef<MapRef>(null);

  return (
    <MapboxMap
      ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 1,
      }}
      style={{ width: "100%", height: "60%", borderRadius: '1rem 1rem 0 0' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onLoad={() => {
        const map = mapRef.current && mapRef.current.getMap();
        if (map) {
          map.flyTo({
            center: [lng, lat],
            zoom: zoom,
            speed: 1.5,
            curve: 1,
            easing: (t: number) => t,
            essential: true,
          });
        }
      }}
    >
      <Marker
        latitude={lat}
        longitude={lng}
        anchor="bottom"
      />
    </MapboxMap>
  );
};
