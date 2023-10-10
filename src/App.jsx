import {HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product/:id/:name" element={<ProductPage/>}/>
          <Route path="/profile/:youtubeId/:facebookId" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App; 
