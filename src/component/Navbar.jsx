import React from "react";
import "./Style.css";

const Navbar = ({handleChageSearch, handleSearch}) => {
  return (
    <div className="container">
      <div>
        <h1>FinProH8</h1>
      </div>
      <div className="search">
        <div >
            <input onChange={handleChageSearch} className="input" type="text" placeholder="Search..." />
        </div>
        <div>
            <button  onClick={handleSearch} className="button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
