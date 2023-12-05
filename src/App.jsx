import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <h1>Casa</h1>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App