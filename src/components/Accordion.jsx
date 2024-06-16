import React, { useState } from 'react';
import iconRight from '../assets/icons/chevron-right.svg';
import iconDown from '../assets/icons/chevron-down.svg';
import './Accordion.css';

const Accordion = ({ questionNumber, questionDescription }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };


    return (
      <div>
        <div>
        <div className={`accordion-title ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
          <h3>Question {questionNumber}</h3>
          <img className='icon-right' src={isOpen ? iconDown : iconRight} alt="icon-right" />
        </div>
        {isOpen ? (
          <p className='accordion-description'>
            {questionDescription}
          </p>
        ): null}
      </div>
      <hr className='accordion-separator' />
    </div>
    );
};

export default Accordion;