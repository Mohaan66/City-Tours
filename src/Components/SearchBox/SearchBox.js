import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (




 <div className="flex items-center justify-center pa2 bg-lightest-blue navy">


<form>
  <div className="form-row">
    <div className="col">
       <label htmlFor="name">Name</label>
       <input type="checkbox" className="form-control mb-2 mr-sm-2" placeholder="First name" />
       
    </div>
    <div className="col">
       <label htmlFor="password">password</label>
       <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Last name" />
    </div>
     <div className="col">
       <label htmlFor="password">password</label>
       <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Last name" />
    </div>

  <div id="list1" class="dropdown-check-list" tabindex="100">
        <span class="anchor">Select Fruits</span>
        <ul class="items">
            <li><input type="checkbox" />Apple </li>
            <li><input type="checkbox" />Orange</li>
            <li><input type="checkbox" />Grapes </li>
            <li><input type="checkbox" />Berry </li>
            <li><input type="checkbox" />Mango </li>
            <li><input type="checkbox" />Banana </li>
            <li><input type="checkbox" />Tomato</li>
        </ul>
    </div>

    <div class="col-auto my-4">
      <button type="submit" class="btn btn-primary mb-2 ">Submit</button>
    </div>
  </div>
</form>
 
 
    </div>


  );
}

export default SearchBox;


