import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import './bootstrap.min.css'
const App=()=> {
  return (
    <div className="App">
     <Header/>
     <main><h1>welcome to Raya shop </h1></main>
     <Footer/>
    </div>
  );
}

export default App;
