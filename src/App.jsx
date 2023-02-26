import './App.css'
import TopSection from './components/TopSection'
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet'

function App() {
   

  return (
    <main>      
    <TopSection />

      <div className="bottom-section">
      <MapContainer center={[9.025860 , 7.578330]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[9.025860 , 7.578330]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </div>

    </main>
  )
}

export default App
