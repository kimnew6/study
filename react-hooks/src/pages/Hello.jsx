import React from 'react';

const Hello = ({ color, background, name }) => {
  return <h1 style={{ color, background }}>{name}'s React Hooks</h1>;
};

Hello.defaultProps = {
  name: '이름 없음',
  color: 'black',
  background: 'skyblue',
};

export default Hello;
