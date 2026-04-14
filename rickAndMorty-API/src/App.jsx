import './App.css'
import {GlobalStyle} from "./styles/base/global.js";
import {Header} from "./Header/index.jsx";
import {Card} from "./Card/index.jsx";
import {Main} from "./Main/index.jsx";
import {SectionCharacters} from "./SectionCharacters/index.jsx";

export default function App(){
  return (
      <>
          <GlobalStyle />
          <Header />
          <Main />
          <SectionCharacters />
      </>
  )
}