import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.scss';
import TourList from './Components/TourList';


class App extends Component {

render() {
  return (

  	<div className='App'>
   
   <Navbar />
   
  
   
    <TourList />
    <Footer />
   
   

     </div>
   

  );
}


}
export default App;
