import React from "react"
import { useState } from "react"
import "./App.css"
import { CardMediaItem } from "./components/Card/CardMediaItem"

export const App = () => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className="App">
      <CardMediaItem {...{ checked, setChecked, label: "Flood zone 3" }} />
    </div>
  )
}
