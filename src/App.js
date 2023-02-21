import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import SMStatus from './components/SMStatus';


function App() {

  const [arr, setArr] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    }
  ])

  const [indexNumber, setIndexNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);
  const [percent,setPercent] = useState(0);
  const [status,setStatus] = useState([]);


  let checkAns = (selected, correct) => {
    if (selected == correct) {
      setMarks(marks + 1)
      status.push(true)
      setStatus([...status])
    }else{
      status.push(false)
      setStatus([...status])
    }
    setIndexNumber(indexNumber + 1)
    if (indexNumber + 1 == arr.length) {
      setResult(true)
    }
  }
  

  return (
    <div className='App'>
      <div className='quiz'>

        <div className='box'>
          <h1>Quiz App</h1>
        </div>
        {
          result ?
            <div>
              <h3>Marks : {marks}</h3>
              <h3>Percentage : {(marks/arr.length)*100}%</h3>
            </div> :
            <div>

              <div className='sub'>
                <h3>Question {indexNumber + 1} of {arr.length}</h3>
                <h3>Quiz Marks : {arr.length * 2}</h3>
              </div>

              <div className='questionBox'>
                <h1>{arr[indexNumber].question}</h1>
              </div>
              <div className="answerBox">
                {
                  arr[indexNumber].options.map((e, i) => {
                    return (
                      <div key={i} className="options">
                        <button onClick={() => { checkAns(e, arr[indexNumber].answer) }}>{e}</button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        }
        <SMStatus status={status}/>        
      </div>
    </div>
  );
}

export default App;
