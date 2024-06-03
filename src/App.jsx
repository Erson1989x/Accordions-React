import React from 'react';
import './App.css';
import Accordion from './components/Accordion.jsx';

const questions = [
  {
    title: 'Question 1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sequi corporis, doloribus adipisci assumenda eaque.',
  },
  {
    title: 'Question 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sequi corporis, doloribus adipisci assumenda eaque.',
  },
  {
    title: 'Question 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sequi corporis, doloribus adipisci assumenda eaque.',
  },
]

const App = () => {


  return (
    <div className="app-container">
      <h2 className="app-title">Frequently Asked Questions</h2>
      <p className='app-description'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sequi
        corporis, doloribus adipisci assumenda eaque.
      </p>
      <div className="accordions-container">
        {questions.map((question,index) => (
          < Accordion key={index} questionNumber={index + 1} questionTitle={question.title} questionDescription={question.description} />
        ))}
      </div>
    </div>
  );
};

export default App;