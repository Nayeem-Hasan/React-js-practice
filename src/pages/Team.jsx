import React from 'react';
import { useEffect, useState } from "react";
import Menu from "../component/Menu";


const Team = () => {
    const [Data,SetData]=useState();

    useEffect(()=>{
      (async()=>{

      let response=  await fetch('https://dummyjson.com/products/')
      let json= await response.json()
      SetData(json)

      })()
    },[])

  return (
    <div>
        <Menu/>
      <div>
        {JSON.stringify(Data)}
      </div>
    </div>
  )
}

export default Team; 
