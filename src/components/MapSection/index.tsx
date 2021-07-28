import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useTracker } from 'src/hooks/useTracker'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MapSection = () => {
  const { data } = useTracker()
  const [map, setMap] = useState<L.Map>()

  const icon = L.icon({
    iconUrl: 'icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [18, 50],
    popupAnchor: [0, -32],
  })

  useEffect(() => {
    if (data.location) {
      map?.flyTo([data?.location.lat, data?.location.lng], 16, {
        duration: 4,
      })
    }
  }, [data.location])

  return (
    <section className="flex-1 z-0 relative">
      <MapContainer
        className="w-full h-full"
        center={[data?.location.lat, data?.location.lng]}
        zoom={16}
        scrollWheelZoom={false}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data?.location.lat, data?.location.lng]} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default MapSection
