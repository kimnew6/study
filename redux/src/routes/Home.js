import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addTODo }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addTODo(text);
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

//Redux state로부터 home(component)에 prop으로 전달.
function mapStateToProps(state) {
  return { toDos: state }; //toDos는 여기서 만들어 준 것.
}

function mapDispatchToProps(dispatch) {
  return { addTODo: text => dispatch(actionCreators.addToDo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
