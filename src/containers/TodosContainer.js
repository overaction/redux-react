import React from 'react';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { connect } from 'react-redux';

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    )
}

export default connect(
    stat => ({
        todos: stat.todos.todos,
        input: stat.todos.input
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);