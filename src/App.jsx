import {Route, Routes } from "react-router-dom";
/* import Tweet from './components/Tweet'; */
import Home from './components/Home';
import './styles/App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} />  */}
      </Routes>
      {/* <div className="container mt-5">
        <Tweet
          profileImage="https://i.pravatar.cc/100"
          name="J.C. Delega"
          username="jcdelega"
          publication="Desarrollando nuevas ideas con React ⚛️🚀"
          timestamp="17 de junio de 2025 - 12:00 PM"
          initialViews={150}
          initialLikes={12}
          initialRetweets={4}
          initialComments={1}
          initialShares={0}
        />
      </div> */}
    </>
  )
}

export default App
