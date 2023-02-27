function InfoContainer({ipData, loading, error}) {
  return (
    <div className="info-container">

     { error == true ? 
      <h1 className="error">An error ocurred</h1>   
      :
      loading == true ? 
    <h1 className="loading">Loading IP data...</h1>   
    :
    <>
    <div className="data-ip">
      <p>IP ADDRESS</p>
      <h1>{ipData.ip}</h1>
    </div>

    <div className="data-location">
      <p>LOCATION</p>
      <h1>{ipData.location?.city}, {ipData.location?.country}</h1>
    </div>

    <div className="data-timezone">
      <p>TIMEZONE</p>
      <h1>UTC {ipData.location?.timezone}</h1>
    </div>

    <div className="data-isp">
      <p>ISP</p>
      <h1>{ipData.isp}</h1>
    </div>
    </>
    }
  </div>
  )
}

export default InfoContainer