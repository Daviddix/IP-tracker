import { useState, useEffect } from "react"
import arrowRight from "../assets/icon-arrow.svg"
import InfoContainer from "./InfoContainer"

function TopSection({setLong, setLat}) {
  const [ip, setIp] = useState("")
  const [apiInfo, setApiInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    fetch("https://api.ipify.org?format=json")
    .then(raw=> raw.json())
    .then(data =>{
      getIpDetails(data.ip)
    }).catch(()=>{
      setLoading(false)
      setError(true)
      alert("oops, it seems like an error ocurred when trying to get your IP address")
    })
  }, [])

  function getIpDetails(ip){ 
    let urlDomain = `https://geo.ipify.org/api/v2/country,city?apiKey=at_kIoL47zL9Ob4pkvBWDSUmrgBmDIDg&domain=${ip}`

    let urlIp = `https://geo.ipify.org/api/v2/country,city?apiKey=at_kIoL47zL9Ob4pkvBWDSUmrgBmDIDg&ipAddress=${ip}`

    let url

    setError(false)
    setLoading(true)   
    //checks if its a domain or ip address
    if (/^www/.test(ip)) {
      url = urlDomain
    }else{
      url = urlIp
    }
    fetch(url)
    .then(raw => raw.json())
    .then((data)=>{
      setApiInfo(data)
      setLat(data.location.lat)
      setLong(data.location.lng)
      setLoading(false)
      setIp("")
    }).catch(()=>{
      setLoading(false)
      setError(true)
      alert("An error ocurred when trying to get the details for your IP address, please check the IP you entered and try again")
    })
  }

  return (
    <div className="top-section">
        <h1 className="header"> IP Address Tracker</h1>

        <form onSubmit={(e)=>{
          e.preventDefault()
          getIpDetails(ip)
        }}
        className="input-container">

          <input 
          required
          placeholder="Search for any IP address or domain"
          value={ip}
          onChange={(e)=>{
            setIp(e.target.value)
          }}
          type="search" />

          <button className="arrow-div">
            <img src={arrowRight} alt="click to search" />
          </button>
        </form>

       <InfoContainer ipData={apiInfo} loading={loading} error={error} />
      </div>
  )
}

export default TopSection



