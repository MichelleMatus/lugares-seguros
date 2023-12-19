import { Routes, Route } from "react-router-dom";
import { Button } from "antd"
import { AppLayout } from "./components/Layout";
import { Home } from "./views/HomePage";
import './App.css'

function App() {

  return (
    <Routes styles={{width: "100vw"}}> 
      <Route element={<AppLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="/place/details" element={<>Place Details</>} />
        <Route path="/place/create" element={<>Create Place</>} />
        <Route path="/register" element={<>Register</>} />
        <Route path="/login" element={<>Login</>} />
        <Route path="/profile" element={<>Profile</>} />
      </Route>
      </Routes>
  )
}

export default App
