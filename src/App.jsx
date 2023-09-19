import { useState } from 'react'
import Button from './Buttom';
import Counter from './Counter';
import Logs from './Logs';


const INITIAL_COUNTER = 0;
const COUNTER_STEP = 1;
const MAX_COUNTER_VALUE = 5;
const MIN_COUNTER_VALUE = -5;

const App = () => {

  const [counter, setCounter] = useState(INITIAL_COUNTER);
  const [logs, setLogs] = useState([]);

  let id = 0;

  const handleMinusBtnClick = () => {
    const newCounter = counter - COUNTER_STEP

    const log = {
      id: ++id,
      action: 'minus',
      prevValue: counter,
      value: newCounter
    }

    setCounter(newCounter)
    setLogs([...logs, log]) // Spread оператор для массивов - ... (позволяет предыдущее значение прибавить к новому (newCounter) в данном случае)
  }

  const handlePlusBtnClick = () => {
    const newCounter = counter + COUNTER_STEP

    const log = {
      id: ++id,
      action: 'plus',
      prevValue: counter,
      value: newCounter
    }
    
    setCounter(newCounter)
    setLogs([...logs, log])
  }

  const isMinusBtmDisabled = () => {
    return counter <= MIN_COUNTER_VALUE;
  }

  const isPlusBtmDisabled = () => {
    return counter >= MAX_COUNTER_VALUE;
  }

  const isCounterRed = () => {
    return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE;
  }

  return (
    <div>
        <Counter
        value={counter}
        isRed={isCounterRed()}/>
        <Button

        text={'-'}
        isDisabled={isMinusBtmDisabled()}
        onClick={handleMinusBtnClick}/>

        <Button 
        text={'+'}
        isDisabled={isPlusBtmDisabled()}
        onClick={handlePlusBtnClick} />
        
        <Logs logs={logs} />
      </div>
  )

}

export default App
