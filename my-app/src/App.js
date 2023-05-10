import React, { useState } from 'react';

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [triangleResult, setTriangleResult] = useState('');
  const [oddNumberResult, setOddNumberResult] = useState('');
  const [primeNumberResult, setPrimeNumberResult] = useState('');

  const handleInputNumberChange = (e) => {
    setInputNumber(parseInt(e.target.value));
  }

  const handleGenerateTriangle = () => {
    let result = '';
    for(let i = 1; i <= inputNumber; i++) {
      for(let j = 1; j <= i; j++) {
        result += j + ' ';
      }
      result += '\n';
    }
    setTriangleResult(result);
  }

  const handleGenerateOddNumber = () => {
    let result = '';
    for(let i = 1; i <= inputNumber; i++) {
      if(i % 2 !== 0) {
        result += i + ' ';
      }
    }
    setOddNumberResult(result);
  }

  const handleGeneratePrimeNumber = () => {
    let result = '';
    for(let i = 2; i <= inputNumber; i++) {
      let isPrime = true;
      for(let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime) {
        result += i + ' ';
      }
    }
    setPrimeNumberResult(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate Triangle, Odd and Prime Numbers</h1>
        <label htmlFor="inputNumber">Input Angka:</label>
        <input type="number" id="inputNumber" value={inputNumber} onChange={handleInputNumberChange} />
        <button onClick={handleGenerateTriangle}>Generate Segitiga</button>
        <button onClick={handleGenerateOddNumber}>Generate Bilangan Ganjil</button>
        <button onClick={handleGeneratePrimeNumber}>Generate Bilangan Prima</button>
        <div>
          <h2>Result:</h2>
          <div>
            <h3>Segitiga:</h3>
            <pre>{triangleResult}</pre>
          </div>
          <div>
            <h3>Bilangan Ganjil:</h3>
            <p>{oddNumberResult}</p>
          </div>
          <div>
            <h3>Bilangan Prima:</h3>
            <p>{primeNumberResult}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
