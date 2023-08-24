'use client'
import Login from "./login/page"
import Prologue from "./prologue/page";
import Edit from "./edit/page";
import Intro from "./intro/page";
import Video from "./video/page";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function Home() {
  console.log("hi")
  return (
<Router>
  <Routes>
  <Route path="/" element={<Intro/>} />
  <Route path="/intro" element={<Intro/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/prologue" element={<Prologue/>} />
  <Route path="/edit" element={<Edit/>} />
  <Route path="/video" element={<Video/>} />
  </Routes>
</Router>
  )
}