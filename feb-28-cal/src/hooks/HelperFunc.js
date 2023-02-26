import { useState } from "react";

function HelperFunc() {
    const [previousValue, setPreviousValue] = useState(null);
    const [currentValue, setCurrentValue] = useState('0');
    const [operatorVal , setOperatorVal] = useState(null)

    function handleNumberInput(number) {
      setCurrentValue(currentValue === '0' ? String(number) : currentValue + number);
    }
  
    function handleOperatorInput(operator) {
      setPreviousValue(currentValue);
      setCurrentValue('0');
      setOperatorVal(operator);
    }
  
    function handleEqualsInput() {
      const expression = `${previousValue} ${operatorVal} ${currentValue}`;
      const result = eval(expression); 
      setPreviousValue(null);
      setCurrentValue(result);
    }

    function handleClear() {
        setCurrentValue('0');
        setOperatorVal(null);
        setPreviousValue(null);
    }
    function handlePercentageInput() {
        const result = parseFloat(currentValue) / 100;
        setCurrentValue(result.toString());
      }
    
   
    return [handleEqualsInput , handlePercentageInput , handleClear , handleNumberInput , handleOperatorInput, operatorVal , previousValue , currentValue]
}

export default HelperFunc;