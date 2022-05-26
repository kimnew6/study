import React from 'react';

const Hello = ({ color, name, isSpecial }) => {
  return (
    <h1 style={{ color }}>
      {isSpecial && <b>*</b>}
      {name}'s React Hooks
    </h1>
  );
};

Hello.defaultProps = {
  name: '이름 없음',
};

export default Hello;
