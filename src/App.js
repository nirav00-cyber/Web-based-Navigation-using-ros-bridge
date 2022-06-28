import './App.css';
import Layout from './components/Layout';
import "./components/bootstrap.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
  
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About/>}></Route>
        </Routes>
      </Layout>
      </>
  );
}

export default App;
