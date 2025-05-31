import React from 'react';
import './App.css';
import Stars from './component/Stars';

type StarsProps = {
  count: number;
}

const App: React.FC<StarsProps> = () => {
  const count: number = 5;

  const isValidCount = (count: number): boolean => {
    return Number.isInteger(count) && count >=1 && count <= 5;
  }
  return (
    <>
      {isValidCount(count) ?
        (<Stars count={count} />)
        : null}
    </>
  );
};

export default App
