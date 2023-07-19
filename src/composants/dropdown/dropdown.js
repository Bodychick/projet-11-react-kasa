import './dropdown.css'
import React, { useEffect, useState } from 'react';

function Dropdown(props){
    console.log(props)
    var dropdown = props.dropdown;
    console.log(dropdown);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div className={`collapse-container ${isOpen ? 'open' : ''}`}>
        <div class="collapse-header" onClick={handleToggle}>
          {props.titre}
          <span className={`chevron ${isOpen ? 'open' : ''}`}>&#9662;</span>
        </div>
        <div class="collapse-content">
          <ul>
            {dropdown.map(({ drop, index }) =>
                                
                <li key={index}>{drop}</li>
            )}
         </ul>
        </div>
    </div>
      
    )
}

export default Dropdown