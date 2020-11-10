import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
//import SearchBox from './Components/SearchBox/SearchBox';
import './App.scss';
import TourList from './Components/TourList';

import SearchBox from './Components/SearchBox/SearchBox';


class App extends Component {

render() {
  return (

  	<div className='App'>
   
   <Navbar />
   <SearchBox />
   <TourList />
   
   

     </div>
   

  );
}


}
export default App;
