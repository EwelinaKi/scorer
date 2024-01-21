import { FC } from 'react';
import { decrement, increment } from '../store/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';


export const CounterExample: FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{padding: '10px'}}
        >
          Increment
        </button>
        <span style={{padding: '10px'}}>{count}</span>
        <button
          aria-label="Decrement value"
          style={{padding: '10px'}}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};