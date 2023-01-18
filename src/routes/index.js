import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Exercise1, Exercise2 } from './../views'
import { NotFound } from "./../components"

const routes = () => {
  const Exercise1Component = <Exercise1 />
  const Exercise2Component = <Exercise2 />
  const NotFoundComponent = <NotFound />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercise1" element={ Exercise1Component } />
        <Route path="/exercise2" element={ Exercise2Component } />
        <Route path="*" element={ NotFoundComponent } />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
