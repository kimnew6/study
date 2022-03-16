import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

//Redux state로부터 home(component)에 prop으로 전달.
function mapStateToProps(state) {
  return { toDos: state }; //toDos는 여기서 만들어 준 것.
}

export default connect(mapStateToProps)(Home);
