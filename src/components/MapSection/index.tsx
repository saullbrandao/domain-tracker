import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import markerIcon from '../../assets/icon-location.svg'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MapSection = () => {
  const icon = L.icon({
    iconUrl: 'icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [18, 50],
    popupAnchor: [0, -32],
  })

  return (
    <section className="flex-1 z-0 relative">
      <MapContainer
        className="w-full h-full"
        center={[37.38605, -122.08385]}
        zoom={16}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.38605, -122.08385]} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default MapSection
