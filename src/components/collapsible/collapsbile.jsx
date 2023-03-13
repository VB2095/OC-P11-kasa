import React, { useState } from 'react';
import './collapsible.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  }

  return (
    
    <div className='collapsible'>
      
      <div className='collapsible-title' onClick={toggleCollapsible}>
      <h2>{props.title}</h2>
      <button >
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </button>
      </div>
      
      <div className='collapsible-content'>
      {isOpen && <p>{props.content}</p>}
      </div>
      
      
    </div>
  );
}

export default Collapsible;