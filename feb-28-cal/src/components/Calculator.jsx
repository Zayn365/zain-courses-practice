import React from 'react';
import './Calculator.css';
import HelperFunc from '../hooks/HelperFunc';

function Calculator() {
  const [handleEqualsInput , handlePercentageInput , handleClear , handleNumberInput , handleOperatorInput , previousValue, operatorVal , currentValue] = HelperFunc();  
  return (
    <div className="calculator">
    {/* {operatorVal && previousValue ? <h1 style={{color: 'red'}}>{previousValue . operatorVal}</h1>  : ''}   */}
      <div className="display">{currentValue}</div>
      
      <button className='grey' onClick={() => handleClear()}>AC</button>
      <button className='grey' disabled={true}>.</button>
      <button className='grey' onClick={() => handlePercentageInput()}>%</button>
      <button className='grey' disabled={true}>.</button>
      <button onClick={() => handleNumberInput(1)}>1</button>
      <button onClick={() => handleNumberInput(2)}>2</button>
      <button onClick={() => handleNumberInput(3)}>3</button>
      <button className='yellow' onClick={() => handleOperatorInput('+')}>+</button>
      <button onClick={() => handleNumberInput(4)}>4</button>
      <button onClick={() => handleNumberInput(5)}>5</button>
      <button onClick={() => handleNumberInput(6)}>6</button>
      <button className='yellow' onClick={() => handleOperatorInput('-')}>-</button>
      <button onClick={() => handleNumberInput(7)}>7</button>
      <button onClick={() => handleNumberInput(8)}>8</button>
      <button onClick={() => handleNumberInput(9)}>9</button>
      <button className='yellow' onClick={() => handleOperatorInput('*')}>*</button>
      <button onClick={() => handleNumberInput(0)}>0</button>
      <button disabled={true}>.</button>
      <button className='yellow' onClick={() => handleOperatorInput('/')}>÷</button>
      <button className='yellow' onClick={() => handleEqualsInput()}>=</button>
    </div>
  );
}

export default Calculator;
