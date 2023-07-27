import './dropdown.css'
import React, { useState } from 'react';

function Dropdown(props){

    var dropdown = props.dropdown;
    console.log(dropdown);
    const [isOpen, setIsOpen] = useState(false);
    console.log(Array.isArray(dropdown));

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    
    return (
    <div className={`collapse-container ${isOpen ? 'open' : ''}`}>
        <div className="collapse-header" onClick={handleToggle}>
          <span>{props.titre}</span>
          <span className={`chevron ${isOpen ? 'open' : ''}`}><i className="fa-solid fa-chevron-down"></i></span>
        </div>
        <div className="collapse-content">
          {Array.isArray(dropdown) ? (
            <ul>
              {dropdown.map((drop, index) => (
                <li key={index}>{drop}</li>
              ))}
            </ul>
          ) : (
            <p>{dropdown}</p>
          )}
        </div>
    </div>
      
    )
}

export default Dropdown