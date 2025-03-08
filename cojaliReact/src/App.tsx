import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import FooterBar from './Components/FooterBar'
import BodyIndex from './Components/BodyIndex'
import Agents from "./Components/Agents";
import Weapons from "./Components/Weapons";
import WeaponsSkins from "./Components/WeaponsSkins";
import './CSS_React/StyleIDX.css'
import'./CSS_React/BodyIndex.css'
import './CSS_React/StyleAgents.css'
import './CSS_React/StyleWeapons.css'
import './CSS_React/StyleWeaponsSkins.css'


function App() {


  return (
    <Router>
    <NavBar /> 

    <Routes>
      <Route path="/" element={<BodyIndex />} /> 
      <Route path="/agents" element={<Agents />} />
      <Route path="/weapons" element={<Weapons />}/>
      <Route path="/weapon-skins" element={<WeaponsSkins />} /> 
    </Routes>

    <FooterBar /> 
  </Router>
  )
}

export default App
