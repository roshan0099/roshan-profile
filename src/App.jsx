import { useState } from "react"
import { Header } from "./layout/header"
import { MainBody } from "./layout/mainBody"

export default function App(){


  const [numb, useNumb ] = useState(0)
  function clilckme(){
    useNumb(numb+1)
  }
  return (
    <>
      <Header></Header>
      <MainBody></MainBody>
    </>
  )
}