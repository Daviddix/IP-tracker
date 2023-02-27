import './App.css'
import TopSection from './components/TopSection'
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet'
import { useState,useEffect,useRef } from 'react'
import L from "leaflet"

function App() {
   const [long, setLong] = useState("")
   const [lat, setLat] = useState("")
   const mapRef = useRef(null)
   const myIcon = L.icon({
    iconUrl : "/src/assets/icon-location.svg",
    iconSize : [30, 35],
    iconAnchor: [15, 15]
   })

   useEffect(()=>{
    mapRef.current?.setView([lat,long])
   }, [[lat,long]])

  return (
    <main>      
    <TopSection
    setLong={setLong}
    setLat={setLat}
    />

      <div className="bottom-section">
      <MapContainer 
      ref={mapRef}
      center={[lat, long]} 
      zoom={53} 
      scrollWheelZoom={true}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker 
  icon={myIcon}
  position={[lat, long]}>
    <Popup>
     Your Location based on your IP address
    </Popup>
  </Marker>
      </MapContainer>
      </div>

    </main>
  )
}

export default App
