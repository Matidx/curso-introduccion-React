import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal/index.js";


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);


    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
    
              <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.leght) && <p>¡Crea tu primer TODO!</p>}
          
          
                {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete = {() => completeTodo(todo.text)}
                  onDelete = {() => deleteTodo(todo.text)}
                      />
              ))}
                </TodoList>
                
                {!!openModal && (
                  
                <Modal>
                  <TodoForm/>
                </Modal>
                )}
    
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
        </React.Fragment>
    );
}

export {AppUI};