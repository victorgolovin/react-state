import { useState } from 'react'
import Button from './Buttom';
import Counter from './Counter';

const INITIAL_COUNTER = 0;
const COUNTER_STEP = 1;
const MAX_COUNTER_VALUE = 5;
const MIN_COUNTER_VALUE = -5;

const App = () => {


  const [counter, setCounter2] = useState(INITIAL_COUNTER);

  const handleMinusBtnClick12 = () => {
    setCounter2(counter - COUNTER_STEP)
  }

  const handlePlusBtnClick22 = () => {
    setCounter2(counter + COUNTER_STEP)
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
        <Button 
        text={'-'}
        isDisabled={isMinusBtmDisabled()}
        onClick={handleMinusBtnClick12}/>

        <Button 
        text={'+'}
        isDisabled={isPlusBtmDisabled()}
        onClick={handlePlusBtnClick22} />
        <Counter
        value={counter}
        isRed={isCounterRed()}/>
      </div>
  )

}

export default App
