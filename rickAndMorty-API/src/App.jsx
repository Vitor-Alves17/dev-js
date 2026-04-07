import './App.css'
import {GlobalStyle} from "./styles/base/global.js";
import {Header} from "./Header/index.jsx";
import {Card} from "./card/index.jsx";

export default function App(){
  return (
      <>
          <GlobalStyle />
          <Header />
          <Card></Card>
      </>
  )
}