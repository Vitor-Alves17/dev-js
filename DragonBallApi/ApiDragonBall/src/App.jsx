import {useEffect, useState} from "react";
import './App.css'
import {Header} from "./components/header/index.jsx";
import {Main} from "./components/main/index.jsx";

export const App = () => {

  return (
     <>
         <Header/>
         <Main/>
     </>
  )
}