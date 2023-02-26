import './App.css'
import TopSection from './components/TopSection'
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
   const [long, setLong] = useState("")
   const [lat, setLat] = useState("")
   useEffect(()=>{
    getLongitudeandLatitude()
   })

   function getLongitudeandLatitude(){
    navigator.geolocation.getCurrentPosition((p)=>{
      setLong(p.coords.longitude)
      setLat(p.coords.latitude)
    })
   }

  return (
    <main>      
    <TopSection/>

      <div className="bottom-section">
      <MapContainer center={[long, lat]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[long, lat]}>
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
