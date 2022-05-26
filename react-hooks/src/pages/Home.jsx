import React from 'react';
import Hello from './Hello';

const Home = () => {
  return (
    <>
      <Hello name="LuluZoe" color="#800080" isSpecial={true} />
      <Hello color="pink" />
    </>
  );
};

export default Home;
