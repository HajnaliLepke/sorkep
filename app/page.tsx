"use client"

import { useEffect,useState } from 'react';
import Hero from './components/Hero'
import PlaceList from './components/PlaceList'

export default function Home() {

  const [placeList,setPlaceList]= useState([]);
  useEffect(() => {
    getPlaceList('pubs in budapest');
  }, [])
  
  
  const getPlaceList=async(value:string) => {
    const result = await fetch("api/google-place-api?q="+value)
    const data = await result.json();

    console.log(data.resp.results);
    setPlaceList(data.resp.results);
  }
  return (
  <div>
    <Hero userInput={(value:string)=>getPlaceList(value)}/>

    {placeList ? <PlaceList placeList={placeList} /> : null}
  </div>
    )
}
