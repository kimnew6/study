import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1> <h5>Created at:{toDo?.id}</h5>;
    </>
  );
}
function mapStateToProps(state, ownProps) {
  // console.log(ownProps); // console에 history, location, match가 나오지 않는다. 뭔가 잘못 됨.
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  // console.log(id);
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
