import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Exercise1, Exercise2 } from '../views'
import { NotFound } from "../components"

export const Exercise1Component = <Exercise1 />
export const Exercise2Component = <Exercise2 />
export const NotFoundComponent = <NotFound />

// ADD CONFIG ROUTES:
const routes = () => {
  // GET COMPONENTS FROM DIRECTORY
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ Exercise1Component } />
        <Route path="/exercise1" element={ Exercise1Component } />
        <Route path="/exercise2" element={ Exercise2Component } />
        <Route path="*" element={ NotFoundComponent } />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
