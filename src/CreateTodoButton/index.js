import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = () => {
    // funcion toggle
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button 
    className="CreateTodoButton" 
    onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };