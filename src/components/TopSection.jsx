import { useState, useEffect } from "react"
import arrowRight from "../assets/icon-arrow.svg"
import InfoContainer from "./InfoContainer"

function TopSection() {
  const [ip, setIp] = useState("")
  const [apiInfo, setApiInfo] = useState({})

  useEffect(()=>{
    fetch("https://api.ipify.org?format=json")
    .then(raw=> raw.json())
    .then(data =>{
      getIpDetails(data.ip)
    } )
  }, [])

  function getIpDetails(ip){    
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_kIoL47zL9Ob4pkvBWDSUmrgBmDIDg&ipAddress=${ip}`)
    .then(raw => raw.json())
    .then((data)=>{
      setApiInfo(data)
    })
  }

  return (
    <div className="top-section">
        <h1 className="header"> IP Address Tracker</h1>

        <form 
        onSubmit={(e)=>{
          e.preventDefault()
          getIpDetails(ip)
        }}
        className="input-container">

          <input 
          value={ip}
          onChange={(e)=>{
            setIp(e.target.value)
          }}
          type="search" />

          <button className="arrow-div">
            <img src={arrowRight} alt="click to search" />
          </button>
        </form>

       <InfoContainer
       ipData={apiInfo}
       />
      </div>
  )
}

export default TopSection



