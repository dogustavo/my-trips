import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

export default function Map({ places }: MapProps) {
  const renderMarker = () =>
    places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location

      return (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
        />
      )
    })

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={10}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {renderMarker()}
    </MapContainer>
  )
}
