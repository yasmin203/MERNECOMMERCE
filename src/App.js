import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './bootstrap.min.css'
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

const App=()=> {
  return (

    <Router>
     <Header/>
     <main className="py-3">
     <Container>
     <Routes>

      <Route path="/" component={HomeScreen} element={<HomeScreen/>} exact />
      <Route path="/product/:id" component={ProductScreen} element={<ProductScreen/>}  />
      </Routes>
      </Container>
       </main>
     <Footer/>
   
    </Router>
  );
}

export default App;
