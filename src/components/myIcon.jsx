import L from "leaflet"
import iconSvg from "../assets/icon-location.svg"

export let myIcon = L.icon({
    iconUrl: iconSvg,
    iconAnchor:null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
})