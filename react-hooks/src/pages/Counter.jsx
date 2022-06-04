import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Counter = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <Div>
        <Button variant="contained" onClick={onDecrease}>
          -1
        </Button>
        <Button variant="contained" onClick={onIncrease}>
          +1
        </Button>
      </Div>
    </>
  );
};

export default Counter;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;
