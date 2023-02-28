## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My Process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview
Ip tracker is a simple webapp that allows you to track the location of certain IP addresses and domain too e.g you can track the location of the IP;8.8.8.8 or the location of the domain;www.google.com

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Features

Users are able to:

- View the location of an IP address searched for

- View the location of a domain address searched for

- See information related to the IP searched for e.g location, timezone and ISP

### Screenshot

![](./src/assets/ip.png)
![](./src/assets/1p2.png)
![](./src/assets/ip3.png)

### Link

- Live Site URL: [IP address tracker](https://ip-trackrr.netlify.app)

## My process
I started with building the skeleton of the app with JSX only, I then used CSS for the styling of the app. 
I added functionality with ReactJS; states, useEffect,props and so on. 
the IP data is gotten from the [geoify API](https://www.geo.ipfy.org) while the map is rendered with the help of [leaflet & leaflet React](https://react-leaflet.js.org/docs)

### Built with

- JSX
- CSS custom properties
- Mobile-first workflow
- ReactJS

## Author
- Twitter - [@daviddixx](https://www.twitter.com/dixx_david)

